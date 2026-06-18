import { ArrowLeft, ArrowRight, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import LinkButton from "../../components/common/LinkButton";
import { useCaseStore } from "../../store/useCaseStore";
import { Inner, Section } from "../../styles/layout/layout";

const CaseDetail = () => {
  const { slug } = useParams();
  const cases = useCaseStore((state) => state.cases);
  const item = cases.find((caseItem) => caseItem.slug === slug && caseItem.visible);

  if (!item) return <Navigate to="/cases" replace />;

  const imageSrc = `/cases-optimized/${item.image.replace(/\.(jpe?g|png)$/i, ".webp")}`;

  return (
    <Section>
      <Inner>
        <Link
          to="/cases"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-extrabold text-we-gray-300 transition hover:border-we-blue-300 hover:text-we-white">
          <ArrowLeft size={16} />
          성공사례 목록
        </Link>

        <article className="animate-[fadeUp_0.55s_ease-out_both] overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.045] shadow-we-black">
          <img
            className="aspect-[16/7] w-full bg-we-gray-900 object-cover max-[760px]:aspect-[4/3]"
            src={imageSrc}
            alt={item.title}
            loading="eager"
            decoding="async"
          />

          <div className="grid grid-cols-[minmax(0,0.62fr)_minmax(280px,0.38fr)] gap-8 p-8 max-[900px]:grid-cols-1 max-[640px]:p-5">
            <div>
              <span className="mb-3 inline-flex rounded-full border border-we-blue-300/40 bg-we-blue-300/10 px-3 py-1 text-sm font-extrabold text-we-blue-100">
                {item.category}
              </span>
              <h1 className="break-keep text-[clamp(32px,5vw,58px)] font-black leading-[1.08] text-we-white">
                {item.title}
              </h1>
              <p className="mt-5 break-keep text-lg leading-[1.8] text-we-gray-300">
                {item.summary}
              </p>
              <p className="mt-5 break-keep leading-[1.8] text-we-gray-500">{item.description}</p>

              <div className="mt-8 grid grid-cols-3 gap-3 max-[640px]:grid-cols-1">
                {item.kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-[12px] border border-white/10 bg-white/[0.045] p-4">
                    <span className="text-sm text-we-gray-500">{kpi.label}</span>
                    <strong className="mt-1 block text-2xl font-black text-we-white">
                      {kpi.value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[12px] border border-white/10 bg-we-black/70 p-5">
              <strong className="block text-lg text-we-white">주요 개선 포인트</strong>
              <ul className="mt-4 grid gap-3">
                {item.metrics.map((metric) => (
                  <li key={metric} className="flex items-start gap-2.5 text-we-gray-300">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-we-blue-100" size={18} />
                    <span className="break-keep leading-[1.6]">{metric}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[10px] bg-white/[0.05] p-4">
                <span className="text-sm text-we-gray-500">대표 성과</span>
                <p className="mt-1 break-keep text-xl font-black text-we-white">{item.result}</p>
              </div>
            </aside>
          </div>
        </article>

        <section className="mt-6 grid grid-cols-[minmax(0,0.58fr)_minmax(280px,0.42fr)] gap-6 max-[900px]:grid-cols-1">
          <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-6 shadow-we-gray">
            <div className="mb-5 flex items-center gap-2 text-we-blue-100">
              <Sparkles size={18} />
              <h2 className="text-xl font-black text-we-white">프로젝트 라벨</h2>
            </div>
            <div className="grid grid-cols-3 gap-3 max-[720px]:grid-cols-1">
              {[
                { label: "클라이언트", value: item.clientType },
                { label: "제작 기간", value: item.launchPeriod },
                { label: "유입 채널", value: item.channel },
              ].map((detail) => (
                <div key={detail.label} className="rounded-[10px] bg-we-black/55 p-4">
                  <span className="text-sm text-we-gray-500">{detail.label}</span>
                  <p className="mt-1 break-keep font-extrabold text-we-gray-100">{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 max-[720px]:grid-cols-1">
              {item.detailCards.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-[10px] border border-white/10 bg-white/[0.035] p-4">
                  <span className="text-sm text-we-gray-500">{detail.label}</span>
                  <p className="mt-1 break-keep leading-[1.6] text-we-gray-100">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-6 shadow-we-gray">
            <h2 className="text-xl font-black text-we-white">작업 범위</h2>
            <ul className="mt-5 grid gap-3">
              {item.projectScope.map((scope) => (
                <li key={scope} className="flex items-center gap-2 text-we-gray-300">
                  <CheckCircle2 className="text-we-blue-100" size={17} />
                  {scope}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.timeline.map((step, index) => (
                <span
                  key={step}
                  className="rounded-full border border-white/10 bg-we-black/60 px-3 py-1.5 text-sm font-extrabold text-we-gray-300">
                  {index + 1}. {step}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-6 rounded-[14px] border border-we-blue-300/30 bg-we-blue-300/10 p-6">
          <Quote className="mb-3 text-we-blue-100" size={22} />
          <p className="break-keep text-lg font-extrabold leading-[1.7] text-we-white">
            {item.testimonial}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">
          <LinkButton label="무료진단 받기" to="/diagnosis" icon={<ArrowRight size={16} />} />
          <LinkButton label="리뷰 보기" to="/reviews" icon={<ArrowRight size={16} />} />
        </div>
      </Inner>
    </Section>
  );
};

export default CaseDetail;
