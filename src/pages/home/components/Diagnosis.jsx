import LinkButton from "../../../components/common/LinkButton";
import SectionTitle from "../../../components/common/SectionTitle";
import { DIAGNOSIS_STEP } from "../../../constants/home";
import { Section, Inner } from "../../../styles/layout/layout";

const Diagnosis = () => {
  return (
    <Section className="point3">
      <Inner>
        <SectionTitle
          title="무료 진단 받기"
          desc="지금 바로 무료 진단받고, 사이트의 숨겨진 전환 가능성을 발견하세요."
          align="center"
        />
        <div className="mx-auto w-full max-w-[578px] rounded-[20px] border border-we-gray-900 bg-we-black p-5 max-[640px]:rounded-[14px] max-[640px]:p-3.5">
          {DIAGNOSIS_STEP.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="mb-2.5 flex items-center gap-5 border-b border-we-gray-900 pb-2.5 last:border-0 max-[640px]:gap-3 max-[640px]:text-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#2563eb,#017086)] max-[640px]:h-8 max-[640px]:w-8 max-[640px]:rounded-[9px]">
                  <Icon className="h-5 w-5 max-[640px]:h-4 max-[640px]:w-4" />
                </div>
                <div>
                  <strong>{item.title}</strong>
                </div>
              </div>
            );
          })}
          <LinkButton label="무료진단 및 견적받기" to="/diagnosis" />
        </div>
      </Inner>
    </Section>
  );
};

export default Diagnosis;
