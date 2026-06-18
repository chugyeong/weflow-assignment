import ReviewMarquee from "../../../components/common/ReviewMarquee";
import { LANDING_REVIEWS } from "../../../constants/landing";

const LandingReviews = () => {
  return (
    <section className="mt-24 max-md:mt-16">
      <div className="mb-[34px] mx-auto max-w-[820px] text-center">
        <h2 className="text-[clamp(26px,3vw,38px)] font-black leading-[1.2] text-we-white">
          고객 후기
        </h2>
        <p className="mt-3 break-keep leading-[1.8] text-we-gray-500">
          다양한 업종에서 문의 구조와 운영 관리를 함께 개선했습니다.
        </p>
      </div>
      <ReviewMarquee reviews={LANDING_REVIEWS} />
    </section>
  );
};

export default LandingReviews;
