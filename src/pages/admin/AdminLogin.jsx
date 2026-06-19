import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../utils/adminAuth";
import { toast } from "sonner";
import PageBackground from "../../components/layout/PageBackground";
import { Info } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!loginAdmin(password)) {
      toast.error("비밀번호를 확인해주세요.");
      return;
    }

    navigate("/admin", { replace: true });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070b18] px-5 py-16">
      <PageBackground />
      <form
        className="relative z-10 w-full max-w-[430px] rounded-[24px] border border-white/10 bg-white/[0.055] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        onSubmit={handleSubmit}>
        <div className="mb-8 flex items-center gap-3">
          <img src="/logo.png" alt="WEFLOW" className="mb-4 h-16 w-16 object-contain" />
          <div>
            <h1 className="text-3xl font-black text-we-white">관리자 로그인</h1>
            <p className="text-sm text-we-gray-500">Admin</p>
          </div>
        </div>

        <label className="mb-5 block">
          <span className="mb-2 flex items-center gap-2 text-sm font-extrabold text-we-gray-100">
            비밀번호
            <span className="group relative inline-flex">
              <Info
                className="text-we-gray-500 transition group-hover:text-we-blue-100"
                size={15}
                tabIndex={0}
              />
              <span className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 w-max -translate-x-1/2 translate-y-1 rounded-[10px] border border-white/10 bg-we-black px-3 py-2 text-xs text-we-gray-100 opacity-0 shadow-we-black transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                비밀번호: weflow
              </span>
            </span>
          </span>
          <input
            className="h-[52px] w-full rounded-[14px] border border-white/10 bg-we-black/70 px-4 text-we-gray-100 outline-none transition placeholder:text-we-gray-500 focus:border-we-blue-300 focus:bg-we-black focus:shadow-[0_0_0_3px_rgba(59,130,246,0.22)]"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="관리자 비밀번호를 입력하세요"
            autoFocus
          />
        </label>

        <button
          className="h-14 w-full rounded-[14px] border border-white/10 bg-white/[0.04] font-extrabold text-we-white transition-all duration-200 hover:border-we-blue-300/50 hover:bg-we-blue-300/10 max-[900px]:!text-[13px]"
          type="submit">
          로그인
        </button>
      </form>
    </main>
  );
};

export default AdminLogin;
