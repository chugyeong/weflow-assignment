import { Link } from "react-router-dom";
import PageBackground from "../../components/layout/PageBackground";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20">
      <PageBackground />
      <div className="relative z-10 w-full max-w-[520px] rounded-[24px] border border-white/10 bg-white/[0.055] p-8 text-center shadow-we-black backdrop-blur-xl">
        <img src="/logo.png" alt="WEFLOW" className="mx-auto mb-6 h-16 w-16 object-contain" />
        <strong className="mb-3 block text-[clamp(52px,8vw,86px)] font-black leading-none text-we-blue-100">
          404
        </strong>
        <h1 className="mb-3 text-2xl font-black text-we-white">페이지를 찾을 수 없습니다</h1>
        <p className="mx-auto mb-8 max-w-[360px] break-keep leading-[1.7] text-we-gray-400">
          입력하신 주소가 변경되었거나 삭제되었을 수 있습니다. 홈으로 돌아가 다시 확인해주세요.
        </p>
        <Link
          to="/"
          className="inline-flex h-[52px] items-center justify-center rounded-full border border-we-blue-300/40 bg-we-blue-500/20 px-7 font-extrabold text-we-white transition hover:border-we-blue-100/60 hover:bg-we-blue-500/35">
          홈으로 이동
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
