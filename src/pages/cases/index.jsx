import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCaseStore } from "../../store/useCaseStore";
import { Inner, Section } from "../../styles/layout/layout";
import SectionTitle from "../../components/common/SectionTitle";
import LinkButton from "../../components/common/LinkButton";
import useSpotlightEffect from "../../hooks/useSpotlightEffect";

const cardClass =
  "relative w-full cursor-pointer overflow-hidden rounded-[10px] border border-we-gray-700 shadow-we-gray transition before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_220px_at_var(--spotlight-x)_var(--spotlight-y),rgba(255,255,255,0.12)_0%,rgba(37,99,235,0.14)_35%,rgba(37,99,235,0)_70%)] before:content-[''] hover:-translate-y-1.5 hover:border-we-blue-300 [&>*]:relative [&>*]:z-[1]";

const Cases = () => {
  const navigate = useNavigate();
  const layoutRef = useSpotlightEffect();
  const cases = useCaseStore((state) => state.cases).filter((item) => item.visible);

  return (
    <Section>
      <Inner>
        <SectionTitle
          title="성공사례"
          desc="다양한 업종의 전환 구조와 홈페이지 제작 사례를 한눈에 확인하세요."
        />
        <div
          ref={layoutRef}
          className="grid grid-cols-4 gap-5 max-[1100px]:grid-cols-3 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
          {cases.map((item, idx) => (
            <article
              key={item.slug}
              className={cardClass}
              onClick={() => navigate(`/cases/${item.slug}`)}
              data-process-box>
              <img
                className="block aspect-[2/1.5] w-full bg-we-gray-900 object-cover max-[480px]:aspect-[2/1]"
                src={`/cases-optimized/${item.image.replace(/\.(jpe?g|png)$/i, ".webp")}`}
                alt={item.title}
                loading={idx < 4 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="p-5">
                <strong className="block break-keep text-[clamp(16px,1.8vw,18px)] text-we-white">
                  {item.title}
                </strong>
                <button className="mt-2.5 flex items-center gap-[5px] text-[clamp(12px,1.2vw,14px)] text-we-blue-300">
                  자세히 보기
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[100px] [&_a]:mx-auto [&_a]:max-w-[300px]">
          <LinkButton label="무료진단 받기" to="/diagnosis" icon={<ArrowRight size={15} />} />
        </div>
      </Inner>
    </Section>
  );
};

export default Cases;
