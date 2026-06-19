import { ArrowRight } from "lucide-react";
import LinkButton from "../../../components/common/LinkButton";
import { Link } from "react-router-dom";

const secondaryButtonClass =
  "flex h-[52px] min-w-40 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-center text-[clamp(14px,1.4vw,15px)] font-extrabold leading-[52px] text-we-gray-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-we-blue-100/60 hover:bg-white/10 hover:text-we-white max-[640px]:h-10 max-[640px]:min-w-0 max-[640px]:px-3.5 max-[640px]:text-[13px] max-[640px]:leading-10";

const LandingHero = () => {
  return (
    <div className="flex min-h-[620px] flex-col justify-center max-[1020px]:min-h-0">
      <div className="mb-[18px] w-fit rounded-full border border-we-blue-300 px-3 py-2 text-[clamp(12px,1.2vw,14px)] font-extrabold text-we-blue-100 max-[640px]:mb-3 max-[640px]:px-2.5 max-[640px]:py-1 max-[640px]:text-[11px]">
        WEFLOW CARE PLAN
      </div>
      <h1 className="max-w-[820px] break-keep text-[clamp(42px,6vw,40px)] font-black leading-[1.08] tracking-[0] text-we-white max-[640px]:text-[29px] max-[640px]:leading-[1.13]">
        문의로 이어지는 홈페이지를 만듭니다
      </h1>
      <p className="mt-[22px] max-w-[680px] break-keep text-[clamp(17px,2vw,22px)] leading-[1.7] text-we-gray-300 max-[640px]:mt-3.5 max-[640px]:text-[14px] max-[640px]:leading-[1.58]">
        기획부터 제작, 광고 연동, 운영 관리까지 WEFLOW가 함께합니다. 홈페이지와 랜딩페이지를 연결해
        문의가 들어오는 구조를 설계합니다.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <div className="mt-9 flex flex-wrap gap-4 max-[640px]:mt-5 max-[640px]:gap-2">
          <LinkButton
            label="무료 진단 및 견적받기"
            to="/diagnosis"
            icon={<ArrowRight size={16} />}
          />
          <Link className={secondaryButtonClass} to="/cases">
            실제 제작 성공 보기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
