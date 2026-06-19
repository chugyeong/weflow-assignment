import { Check } from "lucide-react";
import { DIAGNOSIS_ITEMS } from "../../../constants/diagnosis";

const DiagnosisIntroCard = () => {
  return (
    <aside className="relative overflow-hidden rounded-[10px] border border-we-gray-700 bg-we-black/80 p-7 transition before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_220px_at_var(--spotlight-x)_var(--spotlight-y),rgba(255,255,255,0.12)_0%,rgba(37,99,235,0.14)_35%,rgba(37,99,235,0)_70%)] before:content-[''] hover:border-we-blue-300 max-[640px]:p-3.5 [&>*]:relative [&>*]:z-[1]">
      <strong className="mb-3 block text-[clamp(24px,2.6vw,34px)] text-we-white max-[640px]:mb-2 max-[640px]:text-[20px]">
        무료진단 받기
      </strong>
      <p className="mb-6 leading-[1.7] text-we-gray-300 max-[640px]:mb-4 max-[640px]:text-[13px] max-[640px]:leading-[1.55]">
        지금 바로 무료 진단받고, 사이트의 숨은 전환 가능성을 발견하세요.
      </p>

      <ul className="grid gap-3 max-[640px]:gap-2">
        {DIAGNOSIS_ITEMS.map((item) => (
          <li
            key={item}
            className="flex min-h-12 items-center gap-2.5 rounded-[10px] border border-we-gray-700 bg-we-gray-900/75 px-3.5 font-bold text-we-gray-100 max-[640px]:min-h-9 max-[640px]:gap-2 max-[640px]:px-3 max-[640px]:text-[13px]">
            <Check className="h-[18px] w-[18px] shrink-0 text-we-blue-100 max-[640px]:h-4 max-[640px]:w-4" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DiagnosisIntroCard;
