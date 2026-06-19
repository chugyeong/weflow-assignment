import SectionTitle from "../../../components/common/SectionTitle";
import { ArrowRight } from "lucide-react";
import { REVIEWS } from "../../../constants/home";
import { useNavigate } from "react-router-dom";
import { Inner, Section } from "../../../styles/layout/layout";

const Card = ({ rating, author, content }) => {
  const stars = Array.from({ length: rating }, () => "\u2605").join("");

  return (
    <div className="basis-[320px] shrink-0 grow-0 rounded-[20px] border border-we-gray-900 bg-[#0b1122] p-5 max-[640px]:basis-[232px] max-[640px]:rounded-[12px] max-[640px]:p-3 max-[900px]:[&_p]:h-[42px] max-[900px]:[&_p]:text-sm max-[640px]:[&_p]:h-9 max-[640px]:[&_p]:text-xs max-[900px]:[&_strong]:text-xs max-[640px]:[&_strong]:text-[11px]">
      <div className="text-[#fdc700]">{stars}</div>
      <p className="my-2.5 line-clamp-2 h-12 overflow-hidden max-[640px]:my-1.5">{content}</p>
      <strong className="text-sm text-we-gray-500">{author}</strong>
    </div>
  );
};

const ReviewRow = ({ reverse = false }) => {
  const loopReviews = [...REVIEWS, ...REVIEWS];

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex w-max gap-5 max-[640px]:gap-2.5 ${
          reverse
            ? "mb-0 animate-[slideRight_100s_linear_infinite]"
            : "mb-5 animate-[slideLeft_100s_linear_infinite]"
        }`}>
        {loopReviews.map((review, idx) => (
          <Card key={`${idx}${reverse ? "-reverse" : ""}`} {...review} />
        ))}
      </div>
    </div>
  );
};

const Review = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Inner>
        <SectionTitle
          title="고객 후기"
          action={
            <button type="button" onClick={() => navigate("/reviews")}>
              더보기
              <ArrowRight size={16} />
            </button>
          }
        />
        <ReviewRow />
        <ReviewRow reverse />
      </Inner>
    </Section>
  );
};

export default Review;
