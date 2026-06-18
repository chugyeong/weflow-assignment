import SectionTitle from "../../../components/common/SectionTitle";
import { PRODUCTION_PROCESS } from "../../../constants/home";
import { Inner, Section } from "../../../styles/layout/layout";
import useSpotlightEffect from "../../../hooks/useSpotlightEffect";

const Process = () => {
  const layoutRef = useSpotlightEffect();

  return (
    <Section>
      <Inner>
        <div
          ref={layoutRef}
          className="relative mt-10 grid grid-cols-2 gap-6 max-[900px]:grid-cols-1 [&>[data-process-box]]:relative [&>[data-process-box]]:z-[1]">
          {PRODUCTION_PROCESS.map((section, sectionIdx) => (
            <div
              key={section.title}
              data-process-box
              className="relative overflow-hidden rounded-[10px] border border-we-gray-700 p-5 transition before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_220px_at_var(--spotlight-x)_var(--spotlight-y),rgba(255,255,255,0.12)_0%,rgba(37,99,235,0.14)_35%,rgba(37,99,235,0)_70%)] before:content-[''] hover:border-we-blue-300 max-[900px]:p-4 [&>*]:relative [&>*]:z-[1]">
              <SectionTitle title={section.title} />
              <ul>
                {section.items.map((item, idx) => (
                  <li
                    key={item}
                    className={`mb-5 flex items-center gap-2.5 rounded-[15px] px-2.5 py-2.5 font-extrabold text-we-gray-300 last:mb-0 ${
                      sectionIdx === 0 ? "bg-we-gray-900" : "border border-we-gray-900"
                    }`}>
                    <span
                      className={
                        sectionIdx === 0
                          ? "flex h-[30px] w-[30px] items-center justify-center rounded-full bg-we-blue-500 text-we-gray-100"
                          : "text-we-blue-300"
                      }>
                      {sectionIdx === 1 ? String(idx + 1).padStart(2, "0") : idx + 1}
                    </span>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Inner>
    </Section>
  );
};

export default Process;
