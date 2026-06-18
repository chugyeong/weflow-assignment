import { Check } from "lucide-react";
import SectionTitle from "../../../components/common/SectionTitle";
import { MANAGEMENT_SERVICES } from "../../../constants/service";
import { Inner, Section } from "../../../styles/layout/layout";

const Management = () => {
  return (
    <Section className="point1">
      <Inner>
        <SectionTitle
          title="광고 운영 및 사후관리 서비스"
          desc="제작 이후에도 노출과 문의가 계속 이어지도록 운영을 책임집니다."
          align="center"
        />
        <ul className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {MANAGEMENT_SERVICES.map((group) => {
            const Icon = group.icon;

            return (
              <li
                key={group.title}
                className="rounded-[10px] border border-we-gray-700 p-5 text-we-gray-300 transition hover:-translate-y-1.5 hover:border-we-blue-300 hover:text-we-gray-100">
                <h3 className="mb-5 flex items-center gap-5">
                  <Icon className="text-we-blue-300" size={28} />
                  <strong>{group.title}</strong>
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item} className="mb-2.5 flex items-center gap-2.5 last:mb-0">
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Inner>
    </Section>
  );
};

export default Management;
