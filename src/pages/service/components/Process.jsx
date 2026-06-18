import SectionTitle from "../../../components/common/SectionTitle";
import { PRODUCTION_PROCESS } from "../../../constants/service";
import { Inner, Section } from "../../../styles/layout/layout";

const Process = () => {
  return (
    <Section className="point2">
      <Inner>
        <SectionTitle
          title="제작 진행 과정"
          desc="상담부터 사후관리까지, 6단계로 책임지고 진행합니다."
          align="center"
        />
        <ul className="z-10 grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-md:grid-cols-1">
          {PRODUCTION_PROCESS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="rounded-[10px] border border-we-gray-700 p-5 text-we-gray-300 transition hover:-translate-y-1.5 hover:border-we-blue-300 hover:text-we-gray-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-we-gray-700">
                  <Icon size={20} />
                </div>
                <span className="mt-5 block text-xs font-bold text-we-blue-300">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p className="mt-2.5 text-we-gray-500">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Inner>
    </Section>
  );
};

export default Process;
