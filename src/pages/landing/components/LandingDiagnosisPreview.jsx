import { ArrowRight, Check } from "lucide-react";
import { DIAGNOSIS_ITEMS } from "../../../constants/diagnosis";

const LandingDiagnosisPreview = ({ onEstimateClick }) => {
  return (
    <section className="mt-24 max-md:mt-10">
      <div className="mb-[34px] mx-auto max-w-[820px] text-center max-[640px]:mb-6">
        <h2 className="text-[clamp(26px,3vw,38px)] font-black leading-[1.2] text-we-white max-[640px]:text-[22px]">
          무료진단에서 이런 걸 확인해드립니다
        </h2>
        <p className="mt-3 break-keep leading-[1.8] text-we-gray-500 max-[640px]:mt-2 max-[640px]:text-[13px] max-[640px]:leading-[1.55]">
          현재 사이트와 문의 흐름을 기준으로 개선 가능한 지점을 빠르게 짚어드립니다.
        </p>
      </div>
      <ul className="mb-7 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1 max-[640px]:mb-5 max-[640px]:gap-3">
        {DIAGNOSIS_ITEMS.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 rounded-[10px] border border-we-gray-700 bg-we-gray-900/70 p-[18px] font-extrabold text-we-gray-100 max-[640px]:gap-2 max-[640px]:p-3 max-[640px]:text-[13px]">
            <Check className="h-[18px] w-[18px] text-we-blue-100 max-[640px]:h-4 max-[640px]:w-4" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-3 max-[640px]:mt-5">
        <button
          type="button"
          className="flex h-[52px] items-center justify-center gap-2 rounded-[10px] border border-we-gray-700 bg-[linear-gradient(90deg,#4e4e58,#074c8b)] px-6 text-[clamp(14px,1.4vw,15px)] font-extrabold leading-[52px] text-we-gray-100 shadow-we-black transition hover:-translate-y-0.5 hover:border-we-blue-300 max-[640px]:h-10 max-[640px]:px-3.5 max-[640px]:text-[13px] max-[640px]:leading-10"
          onClick={onEstimateClick}>
          무료진단 및 견적받기
          <ArrowRight className="h-4 w-4 max-[640px]:h-3.5 max-[640px]:w-3.5" />
        </button>
      </div>
    </section>
  );
};

export default LandingDiagnosisPreview;
