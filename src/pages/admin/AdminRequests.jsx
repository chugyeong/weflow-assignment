import { useMemo, useState } from "react";
import { FileSpreadsheet, Trash2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { REQUEST_PAGE_CONFIG } from "../../constants/admin";
import { useRequestStore } from "../../store/useRequestStore";
import { exportRequestsExcel } from "../../utils/excel";
import AdminStatGrid from "./components/AdminStatGrid";
import RequestTable from "./components/RequestTable";
import {
  filterByType,
  getStatusCounts,
  normalizeStatus,
  requestStatuses,
  statusFilters,
} from "./utils";

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

const AdminRequests = () => {
  const { pathname } = useLocation();
  const pageKey = pathname.includes("reservations") ? "reservations" : "inquiries";
  const { type, title, description, excelFileName, downloadLabel, totalLabel } =
    REQUEST_PAGE_CONFIG[pageKey];

  const requests = useRequestStore((state) => state.requests);
  const updateStatus = useRequestStore((state) => state.updateStatus);
  const deleteRequest = useRequestStore((state) => state.deleteRequest);
  const deleteRequests = useRequestStore((state) => state.deleteRequests);
  const deleteAllRequests = useRequestStore((state) => state.deleteAllRequests);
  const [activeStatus, setActiveStatus] = useState(statusFilters[0]);
  const [selectedIds, setSelectedIds] = useState([]);

  const typedRequests = useMemo(() => filterByType(requests, type), [requests, type]);

  const filteredRequests = useMemo(() => {
    if (activeStatus === statusFilters[0]) return typedRequests;
    return typedRequests.filter((item) => normalizeStatus(item.status) === activeStatus);
  }, [activeStatus, typedRequests]);

  const statusCounts = useMemo(() => getStatusCounts(typedRequests), [typedRequests]);

  const handleDownload = () => {
    exportRequestsExcel(typedRequests, excelFileName);
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
    deleteAllRequests(type);
    setSelectedIds([]);
  };

  return (
    <>
      <div className={titleClass}>
        <div>
          <h1 className="text-[clamp(28px,4vw,44px)] font-black text-we-white max-[640px]:text-[24px]">{title}</h1>
          <p className="mt-2 text-we-gray-500 max-[640px]:text-[13px] max-[640px]:leading-[1.5]">{description}</p>
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
            disabled={typedRequests.length === 0}
            onClick={handleDeleteAll}>
            <Trash2 size={15} />
            전체삭제
          </button>
          <button type="button" className={primaryButtonClass} onClick={handleDownload}>
            <FileSpreadsheet size={15} />
            {downloadLabel}
          </button>
        </div>
      </div>

      <AdminStatGrid
        items={[
          { label: totalLabel, value: typedRequests.length, caption: "전체 접수", tone: "blue" },
          {
            label: requestStatuses[0],
            value: statusCounts[requestStatuses[0]],
            caption: "확인 필요",
            tone: "amber",
          },
          {
            label: requestStatuses[1],
            value: statusCounts[requestStatuses[1]],
            caption: "처리 중",
            tone: "cyan",
          },
          {
            label: requestStatuses[2],
            value: statusCounts[requestStatuses[2]],
            caption: "처리 완료",
            tone: "green",
          },
        ]}
      />

      <section className={panelClass}>
        <div className={panelHeaderClass}>
          <h2 className="text-[22px] text-we-white max-[640px]:text-lg">{title} 목록</h2>
          <span className="text-we-gray-500 max-[640px]:text-[13px]">{filteredRequests.length}건 표시</span>
        </div>

        <div className="mb-[18px] flex flex-wrap items-center justify-between gap-3 rounded-[12px] border border-white/10 bg-we-black/35 p-3 max-[640px]:mb-3.5 max-[640px]:gap-2 max-[640px]:rounded-[10px] max-[640px]:p-2.5">
          <span className="text-sm font-extrabold text-we-gray-400 max-[640px]:text-xs">상태 필터</span>
          <select
            className="h-10 min-w-[150px] rounded-[10px] border border-white/10 bg-we-black/80 px-3 text-sm font-extrabold text-we-gray-100 outline-none transition focus:border-we-blue-300 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.18)] max-[640px]:h-9 max-[640px]:min-w-[132px] max-[640px]:rounded-[8px] max-[640px]:px-2.5 max-[640px]:text-xs"
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

export default AdminRequests;
