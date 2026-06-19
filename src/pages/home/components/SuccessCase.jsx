import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/common/SectionTitle";
import { ArrowRight } from "lucide-react";
import { SUCCESS_CASES } from "../../../constants/home";
import { Inner, Section } from "../../../styles/layout/layout";

const SuccessCase = () => {
  const navigate = useNavigate();

  return (
    <Section className="point2">
      <Inner>
        <SectionTitle
          title="성공사례"
          desc="다양한 업종에서 전환 구조를 개선한 실제 제작 사례입니다."
          action={
            <button type="button" onClick={() => navigate("/cases")}>
              더보기
              <ArrowRight size={16} />
            </button>
          }
        />
        <div className="mt-10 grid grid-cols-[300px_minmax(0,1fr)] gap-5 max-[900px]:grid-cols-1 max-[640px]:mt-7 max-[640px]:gap-3.5">
          <div className="flex flex-col justify-center rounded-[20px] border border-we-blue-100/30 bg-[linear-gradient(160deg,rgba(59,130,246,0.95),rgba(8,17,34,0.92))] p-8 text-we-white shadow-we-blue max-[640px]:rounded-[14px] max-[640px]:p-4">
            <strong className="text-[clamp(24px,3vw,32px)] leading-[1.25] max-[640px]:text-[20px]">
              다양한 업종의
              <br />
              성공 사례를 확인 하세요.
            </strong>
            <p className="my-6 text-[clamp(13px,1.2vw,15px)] leading-[1.8] text-we-gray-200 max-[640px]:my-3.5 max-[640px]:text-[13px] max-[640px]:leading-[1.55]">
              어디서도 볼 수 없는 업종별 전환 최적화 사례를 직접 확인하세요.
            </p>
            <button
              className="flex h-[52px] w-max items-center gap-[5px] rounded-full border border-white/20 bg-white/10 px-6 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/16 max-[640px]:h-9 max-[640px]:px-3 max-[640px]:text-xs max-[640px]:[&_svg]:h-3.5 max-[640px]:[&_svg]:w-3.5"
              onClick={() => navigate("/diagnosis")}>
              살펴보기 <ArrowRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[640px]:gap-3.5 max-[560px]:grid-cols-1">
            {SUCCESS_CASES.map((item) => (
              <div
                key={item.title}
                onClick={() =>
                  navigate(`/cases/${item.key.replace(/^cases_/, "").replace(/^cases-/, "")}`)
                }
                className="group cursor-pointer overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.045] text-we-gray-300 shadow-we-gray backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-we-blue-100/60 hover:text-we-gray-100">
                <img
                  className="aspect-[2/1.3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  src={`/cases/${item.key}.jpg`}
                  alt={item.title}
                />
                <div className="p-4 max-[640px]:p-3">
                  <span className="block font-extrabold text-we-white max-[640px]:text-[13px]">
                    {item.title}
                  </span>
                  <button className="mt-2 flex items-center gap-[5px] text-[clamp(12px,1.2vw,14px)] text-we-blue-100 max-[640px]:mt-1.5 max-[640px]:!text-xs max-[640px]:[&_svg]:h-3 max-[640px]:[&_svg]:w-3">
                    자세히보기
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Inner>
    </Section>
  );
};

export default SuccessCase;
