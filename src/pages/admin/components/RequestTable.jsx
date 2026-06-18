import { ChevronDown, Trash2 } from "lucide-react";
import { Fragment, useState } from "react";
import {
  formatDateTime,
  getRequestTypeLabel,
  getReservationSchedule,
  normalizeStatus,
  requestStatuses,
} from "../utils";

const getStatusBadgeClassName = (status) => {
  const colorClass =
    status === "완료"
      ? "bg-emerald-500/80"
      : status === "진행중"
        ? "bg-we-blue-300/80"
        : "bg-amber-400/80 text-we-black";

  return `inline-flex min-w-[58px] justify-center rounded-full px-2.5 py-1.5 text-xs font-extrabold text-we-white ${colorClass}`;
};

const RequestTable = ({ data, type, onStatusChange, onDelete }) => {
  const [openId, setOpenId] = useState("");
  const isAll = type === "all";
  const showSchedule = type === "reservation" || isAll;

  if (data.length === 0) {
    return <div className="px-5 py-11 text-center text-we-gray-500">표시할 내역이 없습니다.</div>;
  }

  const toggleDetail = (id) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  const detailColSpan = 5 + Number(isAll) + Number(showSchedule);

  return (
    <div className="overflow-x-auto rounded-[12px] border border-white/10 [scrollbar-color:#334155_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-we-gray-700">
      <table className="w-full min-w-[860px] border-collapse bg-we-black/40 [&_td]:whitespace-nowrap [&_td]:border-b [&_td]:border-white/6 [&_td]:px-3 [&_td]:py-3.5 [&_td]:text-left [&_td]:align-middle [&_td]:text-we-gray-100 [&_th]:whitespace-nowrap [&_th]:border-b [&_th]:border-white/10 [&_th]:bg-white/[0.035] [&_th]:px-3 [&_th]:py-3.5 [&_th]:text-left [&_th]:align-middle [&_th]:text-[clamp(12px,1.2vw,14px)] [&_th]:font-extrabold [&_th]:text-we-gray-400">
        <thead>
          <tr>
            {isAll && <th>구분</th>}
            <th>상태</th>
            <th>이름</th>
            <th>연락처</th>
            <th>접수일</th>
            {showSchedule && <th>희망 일정</th>}
            <th>관리</th>
            <th>상세</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            const isOpen = openId === item.id;
            const status = normalizeStatus(item.status);
            const isDone = status === "완료";

            return (
              <Fragment key={item.id}>
                <tr className="transition hover:bg-white/[0.025]">
                  {isAll && <td>{getRequestTypeLabel(item.type)}</td>}
                  <td>
                    <span className={getStatusBadgeClassName(status)}>{status}</span>
                  </td>
                  <td>{item.name || "-"}</td>
                  <td>{item.phone || "-"}</td>
                  <td>{formatDateTime(item.createdAt)}</td>
                  {showSchedule && (
                    <td>{item.type === "reservation" ? getReservationSchedule(item) : "-"}</td>
                  )}
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <select
                          className="h-9 min-w-[92px] appearance-none rounded-lg border border-white/10 bg-we-black/80 py-0 pl-2.5 pr-8 text-xs font-extrabold text-we-gray-100 outline-none transition hover:border-white/20 focus:border-we-blue-300 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.16)] disabled:cursor-not-allowed disabled:opacity-50"
                          value={status}
                          disabled={isDone}
                          onChange={(event) => onStatusChange(item.id, event.target.value)}>
                          {requestStatuses.map((nextStatus) => (
                            <option key={nextStatus} value={nextStatus}>
                              {nextStatus}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-current opacity-70"
                          size={14}
                        />
                      </div>
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/40 bg-red-500/10 text-red-300 transition hover:-translate-y-0.5 hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
                        disabled={isDone}
                        onClick={() => onDelete(item.id)}>
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-we-gray-100 transition hover:border-we-blue-300 hover:text-we-white"
                      type="button"
                      onClick={() => toggleDetail(item.id)}>
                      <ChevronDown
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        size={16}
                      />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="!border-b-0 !p-0" colSpan={detailColSpan}>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}>
                      <div className="overflow-hidden">
                        <div className={`m-3 grid grid-cols-3 gap-3 rounded-[10px] border border-white/10 p-4 max-[760px]:grid-cols-1 ${isDone ? "bg-emerald-500/[0.035]" : "bg-white/[0.045]"}`}>
                          <div className="min-w-0 whitespace-normal">
                            <span className="mb-[5px] block text-xs text-we-gray-500">제작 종류</span>
                            <p className="break-keep leading-[1.6] text-we-gray-100">
                              {item.projectType || "-"}
                            </p>
                          </div>
                          <div className="min-w-0 whitespace-normal">
                            <span className="mb-[5px] block text-xs text-we-gray-500">업종</span>
                            <p className="break-keep leading-[1.6] text-we-gray-100">
                              {item.business || "-"}
                            </p>
                          </div>
                          <div className="min-w-0 whitespace-normal">
                            <span className="mb-[5px] block text-xs text-we-gray-500">
                              추가 요청사항
                            </span>
                            <p className="break-keep leading-[1.6] text-we-gray-100">
                              {item.message || "-"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
