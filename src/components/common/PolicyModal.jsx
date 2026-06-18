import { useEffect } from "react";
import { X } from "lucide-react";

const modalCopy = {
  privacy: {
    title: "개인정보처리방침",
    body: `시행일: 2026년 6월 3일

위플로우(WEFLOW)(이하 "회사")는 정보주체의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본 방침은 회사가 운영하는 웹사이트에서 수집하는 개인정보의 처리에 관한 사항을 안내합니다.

1. 수집하는 개인정보 항목
회사는 무료 진단·상담 및 예약 신청 처리를 위해 아래 항목을 수집합니다.

· 필수: 이름, 연락처(전화번호)
· 선택: 제작 종류, 업종, 추가 요청사항
· 예약 시: 희망 날짜 및 시간대

2. 개인정보의 수집 및 이용 목적
· 상담·문의 접수 및 답변
· 맞춤 견적 제공 및 서비스 안내
· 예약 일정 확인 및 연락

3. 개인정보의 보유 및 이용 기간
수집된 개인정보는 수집·이용 목적이 달성되면 지체 없이 파기합니다. 다만 상담 이력 관리를 위해 목적 달성 후 최대 3년간 보관 후 파기하며, 정보주체가 동의를 철회하는 경우 즉시 파기합니다.

관계 법령에 따라 보존할 필요가 있는 경우에는 해당 법령에서 정한 기간 동안 보관합니다.

4. 개인정보의 제3자 제공
회사는 정보주체의 동의 없이 개인정보를 외부에 제공하지 않습니다. 다만 법령에 의거하거나 수사 목적으로 적법한 절차에 따라 요청이 있는 경우는 예외로 합니다.

5. 개인정보 처리의 위탁
회사는 원활한 서비스 제공을 위해 필요한 경우에 한해 개인정보 처리를 위탁할 수 있으며, 위탁이 발생하는 경우 본 방침을 통해 위탁받는 자와 업무 내용을 고지합니다.

6. 정보주체의 권리·의무 및 행사 방법
정보주체는 언제든지 자신의 개인정보에 대한 열람·정정·삭제·처리정지를 요구할 수 있으며, 아래 연락처를 통해 요청하실 수 있습니다. 회사는 지체 없이 필요한 조치를 취합니다.

7. 개인정보의 파기
전자적 파일 형태의 정보는 복구가 불가능한 방법으로 영구 삭제하며, 종이 출력물은 분쇄 또는 소각하여 파기합니다.

8. 개인정보 보호책임자
· 책임자: 신서준 (대표)
· 이메일: contact@weflowlab.kr

9. 고지의 의무
본 개인정보처리방침의 내용에 추가·삭제 및 수정이 있을 경우, 시행 전 본 페이지를 통해 고지합니다.`,
  },
  terms: {
    title: "이용약관",
    body: `시행일: 2026년 6월 3일

본 약관은 위플로우(WEFLOW)(이하 "회사")가 제공하는 웹사이트 제작·광고·운영 관리 등 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.

제1조 (목적)
본 약관은 회사가 제공하는 서비스의 이용 조건 및 절차, 회사와 이용자의 권리·의무를 규정합니다.

제2조 (서비스의 내용)
· 랜딩페이지·홈페이지 제작
· 광고 운영 및 키워드 세팅
· 콘텐츠 업로드 및 사후관리(케어 플랜)
· 검색 노출(SEO) 지원

제3조 (이용 신청 및 상담)
서비스 이용을 원하는 자는 사이트의 문의·예약 폼을 통해 상담을 신청하며, 회사는 접수된 내용을 바탕으로 견적 및 진행 방안을 안내합니다.

제4조 (대금 및 결제)
· 제작·케어·광고 플랜의 금액은 사이트에 게시된 기준에 따르며, 모든 금액은 부가가치세(VAT)를 포함합니다.
· 광고비는 고객 계정에서 고객의 결제수단으로 직접 결제되며, 회사는 운영 및 세팅만 진행합니다.
· 도메인은 고객 명의로 등록되며 도메인 비용은 별도입니다.

제5조 (유지보수의 범위)
케어 플랜의 유지보수는 텍스트·이미지·링크 등 경미한 수정을 기준으로 하며, 페이지 추가 및 기능 개발은 별도 비용이 발생할 수 있습니다.

제6조 (회사의 의무)
회사는 관련 법령을 준수하고, 안정적인 서비스 제공을 위해 노력합니다.

제7조 (이용자의 의무)
이용자는 정확한 정보를 제공해야 하며, 타인의 권리를 침해하거나 법령에 위반되는 콘텐츠를 요청해서는 안 됩니다.

제8조 (면책)
천재지변, 이용자의 귀책사유, 제3자 플랫폼(네이버·카카오·당근 등)의 정책 변경 등 회사의 통제를 벗어난 사유로 발생한 손해에 대해서는 책임을 지지 않습니다.

제9조 (약관의 변경)
회사는 필요한 경우 본 약관을 변경할 수 있으며, 변경 시 본 페이지를 통해 공지합니다.

문의
서비스 및 약관 관련 문의: contact@weflowlab.kr`,
  },
};

const PolicyModal = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [type]);

  if (!type) return null;

  const content = modalCopy[type];

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/65 px-5 backdrop-blur-sm"
      role="presentation"
      onMouseDown={onClose}
      onWheel={(event) => event.preventDefault()}
      onTouchMove={(event) => event.preventDefault()}>
      <section
        className="w-full max-w-[680px] animate-[fadeUp_0.24s_ease-out_both] rounded-[16px] border border-white/10 bg-[#0b1020] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.48)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
        onTouchMove={(event) => event.stopPropagation()}>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 id="policy-modal-title" className="text-2xl font-black text-we-white">
            {content.title}
          </h2>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] text-we-gray-300 transition hover:border-we-blue-300 hover:text-we-white"
            onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[62vh] overflow-y-auto whitespace-pre-line break-keep pr-2 leading-[1.8] text-we-gray-300 [scrollbar-color:#334155_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-we-gray-700">
          {content.body}
        </div>
      </section>
    </div>
  );
};

export default PolicyModal;
