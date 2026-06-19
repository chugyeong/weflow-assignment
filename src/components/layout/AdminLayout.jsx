import {
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck,
  Inbox,
  LogOut,
  Menu,
  RefreshCw,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { isAdminAuthed, logoutAdmin } from "../../utils/adminAuth";

const navLinkClass =
  "group relative flex min-h-10 items-center gap-2.5 overflow-hidden rounded-[11px] border border-transparent px-3 text-sm font-extrabold text-we-gray-400 transition duration-300 before:absolute before:inset-y-2 before:left-0 before:w-1 before:rounded-r-full before:bg-we-blue-100 before:opacity-0 before:transition hover:border-white/10 hover:bg-white/[0.055] hover:text-we-white max-[900px]:min-h-9 max-[900px]:gap-2 max-[900px]:px-2.5 max-[900px]:text-[13px] [&.active]:border-white/10 [&.active]:bg-[linear-gradient(90deg,rgba(59,130,246,0.18),rgba(255,255,255,0.055))] [&.active]:text-we-white [&.active]:shadow-[0_12px_34px_rgba(0,0,0,0.18)] [&.active]:before:opacity-100 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:shrink-0 [&_svg]:rounded-[8px] [&_svg]:bg-white/[0.045] [&_svg]:p-1 [&_svg]:text-we-blue-100 [&_svg]:transition max-[900px]:[&_svg]:h-5 max-[900px]:[&_svg]:w-5 group-hover:[&_svg]:bg-we-blue-300/15";

const utilityButtonClass =
  "flex min-h-10 items-center justify-center gap-2 rounded-[11px] border border-white/10 bg-white/[0.04] text-sm font-extrabold text-we-gray-200 transition hover:-translate-y-0.5 hover:border-we-blue-300/60 hover:bg-white/[0.07] hover:text-we-white max-[900px]:min-h-9 max-[900px]:!text-[13px]";

const adminNavItems = [
  { to: "/admin", label: "전체 현황", icon: BarChart3, end: true },
  { to: "/admin/reservations", label: "예약 관리", icon: CalendarCheck },
  { to: "/admin/inquiries", label: "문의 관리", icon: Inbox },
  { to: "/admin/cases", label: "CASE 관리", icon: BriefcaseBusiness },
];

const AdminBrand = ({ onLogoClick, onAdminClick, compact = false }) => (
  <div className={`text-left ${compact ? "flex items-center gap-2" : "mb-7 grid gap-3"}`}>
    <button
      type="button"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-white/10 bg-white/[0.055] shadow-[0_12px_34px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 max-[900px]:h-8 max-[900px]:w-8 max-[900px]:rounded-[10px]"
      onClick={onLogoClick}>
      <img
        className="h-8 w-8 object-contain max-[900px]:h-6 max-[900px]:w-6"
        src="/logo.png"
        alt="WEFLOW"
      />
    </button>
    <button
      type="button"
      className="text-left transition hover:-translate-y-0.5"
      onClick={onAdminClick}>
      <strong className="block text-base font-bold uppercase tracking-[0] text-we-white max-[900px]:text-[13px]">
        WEFLOW ADMIN
      </strong>
      <span className="block border-t border-we-blue-300/35 pt-0.5 text-xs text-we-gray-500 max-[900px]:text-[10px]">
        Request Management
      </span>
    </button>
  </div>
);

const AdminNav = ({ onNavigate }) => (
  <nav className="grid gap-2">
    {adminNavItems.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.to}
          className={navLinkClass}
          to={item.to}
          end={item.end}
          onClick={onNavigate}>
          <Icon size={20} />
          {item.label}
        </NavLink>
      );
    })}
  </nav>
);

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  if (!isAdminAuthed()) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleGoHome = () => {
    closeMenu();
    navigate("/");
  };

  const handleGoAdmin = () => {
    closeMenu();
    navigate("/admin");
  };

  const handleMobileAdminClick = () => {
    closeMenu();
    navigate("/admin");
    window.scrollTo({ top: 0, left: 0 });
  };

  const handleAdminNavigate = () => {
    closeMenu();
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0 });
    });
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login", { replace: true });
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(720px_circle_at_18%_-10%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(620px_circle_at_105%_22%,rgba(88,230,255,0.08),transparent_50%),#080d1b] text-we-gray-100">
      <div className="grid min-h-screen grid-cols-[248px_minmax(0,1fr)] max-[900px]:grid-cols-1">
        <aside className="sticky top-0 flex h-screen flex-col border-r border-white/10 bg-[#070b17]/88 px-3.5 py-5 shadow-[16px_0_48px_rgba(0,0,0,0.2)] backdrop-blur-xl max-[900px]:hidden">
          <AdminBrand onLogoClick={handleGoHome} onAdminClick={handleGoAdmin} />
          <AdminNav />

          <div className="mt-auto grid gap-2">
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

        <div className="hidden border-b border-white/10 bg-[#070b17]/92 px-4 shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl max-[900px]:sticky max-[900px]:top-0 max-[900px]:z-[900] max-[900px]:flex max-[900px]:h-[60px] max-[900px]:items-center max-[900px]:justify-between">
          <AdminBrand
            compact
            onLogoClick={handleGoHome}
            onAdminClick={isMenuOpen ? handleMobileAdminClick : handleGoAdmin}
          />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-we-gray-100 transition-colors hover:border-we-blue-300 hover:text-we-blue-100"
            aria-label={isMenuOpen ? "관리자 메뉴 닫기" : "관리자 메뉴 열기"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <button
            type="button"
            aria-label="관리자 메뉴 닫기"
            className="fixed inset-0 z-[1090] hidden bg-black/60 backdrop-blur-[3px] max-[900px]:block"
            onClick={closeMenu}
          />
        )}

        <aside
          className={`fixed bottom-0 left-0 top-0 z-[1100] hidden w-[276px] max-w-[84vw] flex-col overflow-hidden border-r border-white/10 bg-[radial-gradient(380px_circle_at_8%_0%,rgba(59,130,246,0.22),transparent_58%),#070b17] shadow-[28px_0_80px_rgba(0,0,0,0.42)] backdrop-blur-xl transition-transform duration-300 max-[900px]:flex ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div className="border-b border-white/10 px-3.5 py-4">
            <div className="flex items-start justify-between gap-3">
              <AdminBrand
                onLogoClick={handleGoHome}
                onAdminClick={handleMobileAdminClick}
                compact
              />
              <button
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] text-we-gray-400 transition hover:bg-white/[0.045] hover:text-we-blue-100"
                aria-label="관리자 메뉴 닫기"
                onClick={closeMenu}>
                <X size={19} />
              </button>
            </div>
          </div>

          <div className="px-3 py-3.5">
            <AdminNav onNavigate={handleAdminNavigate} />
          </div>

          <div className="mt-auto grid gap-2 border-t border-white/10 bg-black/10 p-3">
            <button className={utilityButtonClass} type="button" onClick={handleRefresh}>
              <RefreshCw size={15} />
              새로고침
            </button>
            <button className={utilityButtonClass} type="button" onClick={handleLogout}>
              <LogOut size={15} />
              로그아웃
            </button>
          </div>
        </aside>

        <main className="min-w-0 w-full p-8 max-[900px]:px-4 max-[900px]:pb-14 max-[900px]:pt-5">
          <div className="mx-auto w-full max-w-[1280px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
