import { Check } from "lucide-react";

const DIAGNOSIS_ITEMS = ["문의 구조 진단", "디자인 평가", "검색 노출 분석", "문의 개선 제안"];

const DiagnosisIntroCard = () => {
  return (
    <aside className="relative overflow-hidden rounded-[10px] border border-we-gray-700 bg-we-black/80 p-7 transition before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_220px_at_var(--spotlight-x)_var(--spotlight-y),rgba(255,255,255,0.12)_0%,rgba(37,99,235,0.14)_35%,rgba(37,99,235,0)_70%)] before:content-[''] hover:border-we-blue-300 [&>*]:relative [&>*]:z-[1]">
      <strong className="mb-3 block text-[clamp(24px,2.6vw,34px)] text-we-white">
        무료진단 받기
      </strong>
      <p className="mb-6 leading-[1.7] text-we-gray-300">
        지금 바로 무료 진단받고, 사이트의 숨겨진 전환 가능성을 발견하세요.
      </p>

      <ul className="grid gap-3">
        {DIAGNOSIS_ITEMS.map((item) => (
          <li
            key={item}
            className="flex min-h-12 items-center gap-2.5 rounded-[10px] border border-we-gray-700 bg-we-gray-900/75 px-3.5 font-bold text-we-gray-100">
            <Check className="shrink-0 text-we-blue-100" size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DiagnosisIntroCard;
