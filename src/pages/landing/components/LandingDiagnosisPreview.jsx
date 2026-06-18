import { ArrowRight, Check } from "lucide-react";
import { DIAGNOSIS_CHECKS } from "../../../constants/landing";

const LandingDiagnosisPreview = ({ onEstimateClick }) => {
  return (
    <section className="mt-24 max-md:mt-16">
      <div className="mb-[34px] mx-auto max-w-[820px] text-center">
        <h2 className="text-[clamp(26px,3vw,38px)] font-black leading-[1.2] text-we-white">
          무료진단에서 이런 걸 확인해드립니다
        </h2>
        <p className="mt-3 break-keep leading-[1.8] text-we-gray-500">
          현재 사이트와 문의 흐름을 기준으로 개선 가능한 지점을 빠르게 짚어드립니다.
        </p>
      </div>
      <ul className="mb-7 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
        {DIAGNOSIS_CHECKS.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 rounded-[10px] border border-we-gray-700 bg-we-gray-900/70 p-[18px] font-extrabold text-we-gray-100">
            <Check className="text-we-blue-100" size={18} />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="flex h-[52px] items-center justify-center gap-2 rounded-[10px] border border-we-gray-700 bg-[linear-gradient(90deg,#4e4e58,#074c8b)] px-6 text-[clamp(14px,1.4vw,15px)] font-extrabold leading-[52px] text-we-gray-100 shadow-we-black transition hover:-translate-y-0.5 hover:border-we-blue-300"
          onClick={onEstimateClick}>
          무료진단 및 견적받기
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default LandingDiagnosisPreview;
