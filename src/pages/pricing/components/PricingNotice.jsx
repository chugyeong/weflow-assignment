import { Check } from "lucide-react";
import { DOMAIN_NOTICES } from "../../../constants/pricing";
import { Inner, Section } from "../../../styles/layout/layout";

const PricingNotice = () => {
  return (
    <Section>
      <Inner>
        <div className="rounded-[20px] border border-we-gray-700 p-8 max-[640px]:rounded-[14px] max-[640px]:p-3.5">
          <strong className="mb-3 block text-[15px] text-we-gray-300">안내사항</strong>
          <ul className="my-[18px] flex flex-wrap gap-2.5 max-[640px]:my-3.5 max-[640px]:gap-2">
            {DOMAIN_NOTICES.map((notice) => (
              <li
                key={notice}
                className="flex items-center gap-[5px] rounded-full border border-we-gray-700 px-2.5 py-2 text-[13px] text-we-gray-100 max-[640px]:px-2 max-[640px]:py-1.5 max-[640px]:text-xs">
                <Check className="h-4 w-4 text-we-blue-100 max-[640px]:h-3.5 max-[640px]:w-3.5" />
                {notice}
              </li>
            ))}
          </ul>
          <div className="[&_p]:break-keep [&_p]:leading-[1.8] [&_p]:text-we-gray-300 max-[640px]:[&_p]:text-[13px] max-[640px]:[&_p]:leading-[1.55]">
            <p>도메인은 고객님 명의로 등록되며 비용은 별도입니다.</p>
            <p>WEFLOW에서 등록 및 연결 세팅은 무료로 지원해 드립니다.</p>
            <p>
              광고비는 고객 계정에서 고객 결제수단으로 직접 결제되며, WEFLOW는 운영 및
              세팅만 대행합니다.
            </p>
            <p>
              유지보수는 텍스트, 이미지, 링크 등 경미한 수정 기준입니다. 페이지 추가 및
              기능 개발은 별도 비용이 발생할 수 있습니다.
            </p>
          </div>
        </div>
      </Inner>
    </Section>
  );
};

export default PricingNotice;
