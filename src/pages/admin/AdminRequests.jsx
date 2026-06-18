import { useMemo, useState } from "react";
import { FileSpreadsheet } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useRequestStore } from "../../store/useRequestStore";
import { exportRequestsExcel } from "../../utils/excel";
import AdminStatGrid from "./components/AdminStatGrid";
import RequestTable from "./components/RequestTable";
import { filterByType, getStatusCounts, normalizeStatus, statusFilters } from "./utils";

const titleClass =
  "mb-6 flex items-center justify-between gap-4 max-[760px]:flex-col max-[760px]:items-start";
const actionsClass = "flex flex-wrap items-center gap-2";
const primaryButtonClass =
  "inline-flex min-h-[48px] min-w-[118px] items-center justify-center gap-2 rounded-[10px] border border-we-blue-300/50 bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] px-5 text-[clamp(14px,1.4vw,15px)] font-extrabold text-white shadow-we-blue transition hover:-translate-y-0.5";
const panelClass = "mb-6 rounded-[14px] border border-white/10 bg-white/[0.045] p-5 shadow-we-black backdrop-blur-xl";
const panelHeaderClass =
  "mb-[18px] flex items-center justify-between gap-4 max-[760px]:flex-col max-[760px]:items-start";

const requestPageConfig = {
  reservations: {
    type: "reservation",
    title: "예약 관리",
    description: "예약 신청자의 희망 일정과 상태를 관리합니다.",
    excelFileName: "WEFLOW_예약_목록",
    downloadLabel: "예약 엑셀",
    totalLabel: "전체 예약",
  },
  inquiries: {
    type: "diagnosis",
    title: "문의 관리",
    description: "무료진단 신청 내역과 상담 진행 상태를 관리합니다.",
    excelFileName: "WEFLOW_문의_목록",
    downloadLabel: "문의 엑셀",
    totalLabel: "전체 문의",
  },
};

const AdminRequests = () => {
  const { pathname } = useLocation();
  const pageKey = pathname.includes("reservations") ? "reservations" : "inquiries";
  const { type, title, description, excelFileName, downloadLabel, totalLabel } =
    requestPageConfig[pageKey];

  const requests = useRequestStore((state) => state.requests);
  const updateStatus = useRequestStore((state) => state.updateStatus);
  const deleteRequest = useRequestStore((state) => state.deleteRequest);
  const [activeStatus, setActiveStatus] = useState("전체");

  const typedRequests = useMemo(() => filterByType(requests, type), [requests, type]);

  const filteredRequests = useMemo(() => {
    if (activeStatus === "전체") return typedRequests;
    return typedRequests.filter((item) => normalizeStatus(item.status) === activeStatus);
  }, [activeStatus, typedRequests]);

  const statusCounts = useMemo(() => getStatusCounts(typedRequests), [typedRequests]);

  const handleDownload = () => {
    exportRequestsExcel(typedRequests, excelFileName);
  };

  return (
    <>
      <div className={titleClass}>
        <div>
          <h1 className="text-[clamp(28px,4vw,44px)] font-black text-we-white">{title}</h1>
          <p className="mt-2 text-we-gray-500">{description}</p>
        </div>
        <div className={actionsClass}>
          <button type="button" className={primaryButtonClass} onClick={handleDownload}>
            <FileSpreadsheet size={17} />
            {downloadLabel}
          </button>
        </div>
      </div>

      <AdminStatGrid
        items={[
          { label: totalLabel, value: typedRequests.length, caption: "전체 접수", tone: "blue" },
          { label: "대기", value: statusCounts.대기, caption: "확인 필요", tone: "amber" },
          { label: "진행중", value: statusCounts.진행중, caption: "처리 중", tone: "cyan" },
          { label: "완료", value: statusCounts.완료, caption: "처리 완료", tone: "green" },
        ]}
      />

      <section className={panelClass}>
        <div className={panelHeaderClass}>
          <h2 className="text-[22px] text-we-white">{title} 목록</h2>
          <span className="text-we-gray-500">{filteredRequests.length}건 표시</span>
        </div>

        <div className="mb-[18px] flex flex-wrap items-center justify-between gap-3 rounded-[12px] border border-white/10 bg-we-black/35 p-3">
          <span className="text-sm font-extrabold text-we-gray-400">상태 필터</span>
          <select
            className="h-10 min-w-[150px] rounded-[10px] border border-white/10 bg-we-black/80 px-3 text-sm font-extrabold text-we-gray-100 outline-none transition focus:border-we-blue-300 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.18)]"
            value={activeStatus}
            onChange={(event) => setActiveStatus(event.target.value)}>
            {statusFilters.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <RequestTable
          data={filteredRequests}
          type={type}
          onStatusChange={updateStatus}
          onDelete={deleteRequest}
        />
      </section>
    </>
  );
};

export default AdminRequests;
