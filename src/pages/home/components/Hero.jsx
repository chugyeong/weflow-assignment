import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import DotsBackground from "./DotsBackground";
import LinkButton from "../../../components/common/LinkButton";
import { HERO_CARDS } from "../../../constants/home";

const secondaryButtonClass =
  "flex h-[52px] min-w-40 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-center text-[clamp(14px,1.4vw,15px)] font-extrabold leading-[52px] text-we-gray-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-we-blue-100/60 hover:bg-white/10 hover:text-we-white max-[640px]:h-10 max-[640px]:min-w-0 max-[640px]:px-3.5 max-[640px]:text-[13px] max-[640px]:leading-10";

const Hero = () => {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden bg-[radial-gradient(700px_circle_at_70%_15%,rgba(88,230,255,0.18),transparent_58%),radial-gradient(680px_circle_at_20%_70%,rgba(59,130,246,0.24),transparent_62%),linear-gradient(135deg,#08111f,#0b1020_45%,#071627)] px-5 pb-24 pt-32 max-md:min-h-0 max-md:px-4 max-md:pb-10 max-md:pt-[76px]">
      <DotsBackground />
      <div className="pointer-events-none relative z-10 mx-auto grid w-full max-w-[1180px] grid-cols-[minmax(0,1fr)_360px] items-center gap-10 max-[980px]:grid-cols-1 [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[clamp(12px,1.2vw,14px)] font-extrabold text-we-blue-100 backdrop-blur max-[640px]:mb-3 max-[640px]:gap-1.5 max-[640px]:px-2.5 max-[640px]:py-1 max-[640px]:text-[11px]">
            <Sparkles className="h-4 w-4 max-[640px]:h-3.5 max-[640px]:w-3.5" />
            홈페이지 제작부터 광고 운영까지
          </p>
          <h1 className="max-w-[820px] break-keep text-[clamp(42px,6vw,40px)] font-black leading-[1.08] tracking-[0] text-we-white max-[640px]:text-[29px] max-[640px]:leading-[1.13]">
            문의로 이어지는 홈페이지를 만듭니다
          </h1>
          <p className="mt-6 max-w-[680px] break-keep text-[clamp(16px,1.8vw,20px)] leading-[1.8] text-we-gray-300 max-[640px]:mt-3.5 max-[640px]:text-[14px] max-[640px]:leading-[1.58]">
            예쁜 화면에서 끝나지 않도록, 방문자가 상담으로 이어지는 구조와 광고 운영까지 함께
            설계합니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 max-[640px]:mt-5 max-[640px]:gap-2">
            <LinkButton label="무료 진단 신청" to="/diagnosis" icon={<ArrowRight size={16} />} />
            <Link className={secondaryButtonClass} to="/cases">
              성공 사례 보기
            </Link>
            <Link className={secondaryButtonClass} to="/landing">
              랜딩 페이지 보기
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[20px] border border-white/10 bg-white/[0.045] p-5 shadow-we-black backdrop-blur-xl max-[640px]:gap-2.5 max-[640px]:rounded-[14px] max-[640px]:p-3.5">
          {HERO_CARDS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-[14px] border border-white/10 bg-we-black/45 p-4 max-[640px]:gap-3 max-[640px]:rounded-[12px] max-[640px]:p-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] text-white shadow-[0_12px_28px_rgba(37,99,235,0.28)] max-[640px]:h-9 max-[640px]:w-9 max-[640px]:rounded-[10px]">
                  <Icon className="h-[23px] w-[23px] max-[640px]:h-[18px] max-[640px]:w-[18px]" />
                </div>
                <div>
                  <strong className="block text-we-white max-[640px]:text-sm">{item.title}</strong>
                  <span className="block break-keep text-sm text-we-gray-400 max-[640px]:text-[12px] max-[640px]:leading-[1.45]">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
