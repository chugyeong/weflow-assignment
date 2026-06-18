import { Fragment } from "react";
import { ChevronDown } from "lucide-react";
import { CARE_PLAN_BENEFITS, PROCESS_STEPS } from "../../../constants/home";
import { Section, Inner } from "../../../styles/layout/layout";
import SectionTitle from "../../../components/common/SectionTitle";

const CarePlan = () => {
  return (
    <Section className="point1">
      <Inner>
        <SectionTitle
          title="WEFLOW만의 케어 플랜 혜택"
          desc="제작 이후에도 운영과 광고, 유지보수까지 자연스럽게 이어지도록 설계합니다."
        />
        <div className="mt-10 grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {CARE_PLAN_BENEFITS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[18px] border border-white/10 bg-white/[0.045] p-5 text-[clamp(14px,1.4vw,15px)] text-we-gray-100 shadow-we-gray backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-we-blue-100/60">
                <div className="mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] font-black text-white shadow-[0_14px_30px_rgba(37,99,235,0.28)]">
                  <Icon size={24} />
                </div>
                <span className="block text-[clamp(12px,1.1vw,13px)] font-bold text-we-blue-300">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <strong className="mt-1 block text-lg text-we-white">{item.title}</strong>
                <p className="mt-2 text-[clamp(12px,1.2vw,14px)] leading-[1.7] text-we-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5 max-[900px]:flex-col">
          {PROCESS_STEPS.map((item, idx) => (
            <Fragment key={item}>
              <div className="break-keep rounded-full border border-white/10 bg-we-black/55 px-5 py-3 text-[clamp(12px,1.2vw,14px)] font-extrabold text-we-gray-100 shadow-we-gray">
                {item}
              </div>
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="flex items-center text-we-blue-100 [&_svg]:-rotate-90 max-[900px]:[&_svg]:rotate-0">
                  <ChevronDown size={20} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Inner>
    </Section>
  );
};

export default CarePlan;
