import { Star } from "lucide-react";
import LinkButton from "../../components/common/LinkButton";
import SectionTitle from "../../components/common/SectionTitle";
import { REVIEWS } from "../../constants/home";
import { Inner, Section } from "../../styles/layout/layout";

const Reviews = () => {
  return (
    <Section className="point2">
      <Inner>
        <SectionTitle
          title="고객 리뷰"
          desc="WEFLOW와 함께 제작과 운영을 진행한 고객들의 실제 피드백을 모았습니다."
          align="center"
        />

        <div className="grid grid-cols-4 gap-4 max-[1120px]:grid-cols-3 max-[820px]:grid-cols-2 max-[560px]:grid-cols-1">
          {REVIEWS.map((review, index) => (
            <article
              key={`${review.author}-${index}`}
              className="flex min-h-[210px] flex-col rounded-[12px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-5 shadow-we-gray transition hover:-translate-y-1 hover:border-we-blue-300/70">
              <div className="mb-5 flex items-center gap-1 text-[#fdc700]">
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="grow break-keep leading-[1.75] text-we-gray-100">{review.content}</p>
              <strong className="mt-5 text-sm text-we-gray-500">{review.author}</strong>
            </article>
          ))}
        </div>

        <div className="mt-12 [&_a]:mx-auto [&_a]:max-w-[300px]">
          <LinkButton label="상담 예약하기" to="/reservation" />
        </div>
      </Inner>
    </Section>
  );
};

export default Reviews;
