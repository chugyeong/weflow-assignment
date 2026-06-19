import { useState } from "react";
import { FileSpreadsheet, Trash2 } from "lucide-react";
import { useRequestStore } from "../../store/useRequestStore";
import { exportRequestsExcel } from "../../utils/excel";
import AdminStatGrid from "./components/AdminStatGrid";
import RequestTable from "./components/RequestTable";
import { filterByType, getStatusCounts, requestStatuses } from "./utils";

const titleClass =
  "mb-6 flex items-center justify-between gap-4 max-[760px]:flex-col max-[760px]:items-start max-[640px]:mb-5";
const actionsClass = "flex flex-wrap items-center gap-2 max-[640px]:gap-1.5";
const buttonClass =
  "inline-flex min-h-10 min-w-[96px] items-center justify-center gap-1.5 rounded-[9px] border border-white/10 bg-white/[0.04] px-3.5 text-sm font-extrabold text-we-gray-100 no-underline transition hover:-translate-y-0.5 hover:border-we-blue-300/70 hover:bg-white/[0.07] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 max-[640px]:min-h-9 max-[640px]:min-w-[84px] max-[640px]:px-2.5 max-[640px]:text-xs max-[640px]:[&_svg]:h-3.5 max-[640px]:[&_svg]:w-3.5";
const primaryButtonClass = `${buttonClass} border-we-blue-300/50 bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] text-white shadow-we-blue`;
const panelClass =
  "mb-6 rounded-[14px] border border-white/10 bg-white/[0.045] p-5 shadow-we-black backdrop-blur-xl max-[640px]:mb-4 max-[640px]:p-3.5";
const panelHeaderClass =
  "mb-[18px] flex items-center justify-between gap-4 max-[760px]:flex-col max-[760px]:items-start max-[640px]:mb-4 max-[640px]:gap-2";

const AdminDashboard = () => {
  const requests = useRequestStore((state) => state.requests);
  const updateStatus = useRequestStore((state) => state.updateStatus);
  const deleteRequest = useRequestStore((state) => state.deleteRequest);
  const deleteRequests = useRequestStore((state) => state.deleteRequests);
  const deleteAllRequests = useRequestStore((state) => state.deleteAllRequests);
  const [selectedIds, setSelectedIds] = useState([]);
  const reservations = filterByType(requests, "reservation");
  const inquiries = filterByType(requests, "diagnosis");
  const reservationCounts = getStatusCounts(reservations);
  const inquiryCounts = getStatusCounts(inquiries);
  const recentRequests = requests.slice(0, 8);

  const handleDownloadAll = () => {
    exportRequestsExcel(requests, "WEFLOW_전체_접수목록");
  };

  const handleSelect = (id, checked) => {
    setSelectedIds((prev) => (checked ? [...new Set([...prev, id])] : prev.filter((item) => item !== id)));
  };

  const handleSelectAll = (ids, checked) => {
    setSelectedIds((prev) =>
      checked
        ? [...new Set([...prev, ...ids])]
        : prev.filter((id) => !ids.includes(id)),
    );
  };

  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) return;
    deleteRequests(selectedIds);
    setSelectedIds([]);
  };

  const handleDeleteOne = (id) => {
    deleteRequest(id);
    setSelectedIds((prev) => prev.filter((item) => item !== id));
  };

  const handleDeleteAll = () => {
    deleteAllRequests();
    setSelectedIds([]);
  };

  return (
    <>
      <div className={titleClass}>
        <div>
          <h1 className="text-[clamp(28px,4vw,44px)] font-black text-we-white max-[640px]:text-[24px]">전체 현황</h1>
          <p className="mt-2 text-we-gray-500 max-[640px]:text-[13px] max-[640px]:leading-[1.5]">
            예약과 무료진단 문의를 한눈에 확인하고 실시간으로 관리합니다.
          </p>
        </div>
        <div className={actionsClass}>
          <button
            type="button"
            className={`${buttonClass} border-red-500/35 text-red-200 hover:border-red-400/70`}
            disabled={selectedIds.length === 0}
            onClick={handleDeleteSelected}>
            <Trash2 size={15} />
            선택삭제
          </button>
          <button
            type="button"
            className={`${buttonClass} border-red-500/35 text-red-200 hover:border-red-400/70`}
            disabled={requests.length === 0}
            onClick={handleDeleteAll}>
            <Trash2 size={15} />
            전체삭제
          </button>
          <button type="button" className={primaryButtonClass} onClick={handleDownloadAll}>
            <FileSpreadsheet size={15} />
            전체 엑셀
          </button>
        </div>
      </div>

      <AdminStatGrid
        items={[
          { label: "전체 예약", value: reservations.length, caption: "상담 예약 접수", tone: "blue" },
          {
            label: "대기 예약",
            value: reservationCounts[requestStatuses[0]],
            caption: "확인 필요",
            tone: "amber",
          },
          { label: "전체 문의", value: inquiries.length, caption: "무료진단 접수", tone: "cyan" },
          {
            label: "대기 문의",
            value: inquiryCounts[requestStatuses[0]],
            caption: "상담 대기",
            tone: "violet",
          },
        ]}
      />

      <section className={panelClass}>
        <div className={panelHeaderClass}>
          <h2 className="text-[22px] text-we-white">최근 접수</h2>
          <span className="text-we-gray-500">최근 {recentRequests.length}건</span>
        </div>
        <RequestTable
          data={recentRequests}
          type="all"
          selectedIds={selectedIds}
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          onStatusChange={updateStatus}
          onDelete={handleDeleteOne}
        />
      </section>
    </>
  );
};

export default AdminDashboard;
