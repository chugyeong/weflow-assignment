import { BarChart3, BriefcaseBusiness, CalendarCheck, Inbox, LogOut, RefreshCw } from "lucide-react";
import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { isAdminAuthed, logoutAdmin } from "../../utils/adminAuth";

const navLinkClass =
  "flex min-h-10 items-center gap-2.5 rounded-[9px] border border-transparent px-3.5 font-extrabold text-we-gray-400 transition hover:bg-white/[0.055] hover:text-we-white [&.active]:border-white/10 [&.active]:bg-white/[0.075] [&.active]:text-we-white";

const utilityButtonClass =
  "flex min-h-10 items-center justify-center gap-2 rounded-[9px] border border-white/10 bg-white/[0.035] font-extrabold text-we-gray-200 transition hover:border-we-blue-300/60 hover:bg-white/[0.06] hover:text-we-white";

const AdminLayout = () => {
  const navigate = useNavigate();

  if (!isAdminAuthed()) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login", { replace: true });
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="grid min-h-screen grid-cols-[248px_minmax(0,1fr)] bg-[radial-gradient(720px_circle_at_18%_-10%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(620px_circle_at_105%_22%,rgba(88,230,255,0.08),transparent_50%),#080d1b] text-we-gray-100 max-[900px]:grid-cols-1">
      <aside className="sticky top-0 flex h-screen flex-col border-r border-white/10 bg-[#070b17]/88 px-3.5 py-5 shadow-[16px_0_48px_rgba(0,0,0,0.2)] backdrop-blur-xl max-[900px]:static max-[900px]:h-auto max-[900px]:border-b max-[900px]:border-r-0">
        <button
          type="button"
          className="mb-7 grid gap-2 text-left transition hover:-translate-y-0.5 max-[900px]:mb-[18px] max-[900px]:flex max-[900px]:items-center"
          onClick={() => navigate("/")}>
          <img className="h-10 w-10 object-contain" src="/logo.png" alt="WEFLOW" />
          <strong className="text-lg font-bold uppercase tracking-[0] text-we-white">
            WEFLOW ADMIN
          </strong>
          <span className="text-[clamp(12px,1.2vw,14px)] text-we-gray-500">
            Request Management
          </span>
        </button>

        <nav className="grid gap-2 max-[900px]:grid-cols-4 max-[720px]:grid-cols-2 max-[460px]:grid-cols-1 [&_svg]:shrink-0">
          <NavLink className={navLinkClass} to="/admin" end>
            <BarChart3 size={18} />
            전체 현황
          </NavLink>
          <NavLink className={navLinkClass} to="/admin/reservations">
            <CalendarCheck size={18} />
            예약 관리
          </NavLink>
          <NavLink className={navLinkClass} to="/admin/inquiries">
            <Inbox size={18} />
            문의 관리
          </NavLink>
          <NavLink className={navLinkClass} to="/admin/cases">
            <BriefcaseBusiness size={18} />
            CASE 관리
          </NavLink>
        </nav>

        <div className="mt-auto grid gap-2 max-[900px]:mt-[18px] max-[900px]:grid-cols-2">
          <button className={utilityButtonClass} type="button" onClick={handleRefresh}>
            <RefreshCw size={16} />
            새로고침
          </button>
          <button className={utilityButtonClass} type="button" onClick={handleLogout}>
            <LogOut size={16} />
            로그아웃
          </button>
        </div>
      </aside>

      <main className="min-w-0 w-full p-8 max-[900px]:px-4 max-[900px]:pb-16 max-[900px]:pt-7">
        <div className="mx-auto w-full max-w-[1280px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
