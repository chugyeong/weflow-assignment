import { FileSpreadsheet } from "lucide-react";
import { useRequestStore } from "../../store/useRequestStore";
import { exportRequestsExcel } from "../../utils/excel";
import AdminStatGrid from "./components/AdminStatGrid";
import RequestTable from "./components/RequestTable";
import { filterByType, getStatusCounts } from "./utils";

const titleClass =
  "mb-6 flex items-center justify-between gap-4 max-[760px]:flex-col max-[760px]:items-start";
const actionsClass = "flex flex-wrap items-center gap-2";
const buttonClass =
  "inline-flex min-h-[48px] min-w-[118px] items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-white/[0.04] px-5 text-[clamp(14px,1.4vw,15px)] font-extrabold text-we-gray-100 no-underline transition hover:-translate-y-0.5 hover:border-we-blue-300/70 hover:bg-white/[0.07]";
const primaryButtonClass = `${buttonClass} border-we-blue-300/50 bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] text-white shadow-we-blue`;
const panelClass = "mb-6 rounded-[14px] border border-white/10 bg-white/[0.045] p-5 shadow-we-black backdrop-blur-xl";
const panelHeaderClass =
  "mb-[18px] flex items-center justify-between gap-4 max-[760px]:flex-col max-[760px]:items-start";

const AdminDashboard = () => {
  const requests = useRequestStore((state) => state.requests);
  const updateStatus = useRequestStore((state) => state.updateStatus);
  const deleteRequest = useRequestStore((state) => state.deleteRequest);
  const reservations = filterByType(requests, "reservation");
  const inquiries = filterByType(requests, "diagnosis");
  const reservationCounts = getStatusCounts(reservations);
  const inquiryCounts = getStatusCounts(inquiries);
  const recentRequests = requests.slice(0, 8);

  const handleDownloadAll = () => {
    exportRequestsExcel(requests, "WEFLOW_전체_접수목록");
  };

  return (
    <>
      <div className={titleClass}>
        <div>
          <h1 className="text-[clamp(28px,4vw,44px)] font-black text-we-white">전체 현황</h1>
          <p className="mt-2 text-we-gray-500">
            예약과 무료진단 문의를 한눈에 확인하고 실시간으로 관리합니다.
          </p>
        </div>
        <div className={actionsClass}>
          <button type="button" className={primaryButtonClass} onClick={handleDownloadAll}>
            <FileSpreadsheet size={17} />
            전체 엑셀
          </button>
        </div>
      </div>

      <AdminStatGrid
        items={[
          { label: "전체 예약", value: reservations.length, caption: "상담 예약 접수", tone: "blue" },
          { label: "대기 예약", value: reservationCounts.대기, caption: "확인 필요", tone: "amber" },
          { label: "전체 문의", value: inquiries.length, caption: "무료진단 접수", tone: "cyan" },
          { label: "대기 문의", value: inquiryCounts.대기, caption: "상담 대기", tone: "violet" },
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
          onStatusChange={updateStatus}
          onDelete={deleteRequest}
        />
      </section>
    </>
  );
};

export default AdminDashboard;
