import {
  CommonReviewCard,
  CommonReviewMarquee,
  CommonReviewTrack,
} from "../../styles/common/components";

const ReviewRow = ({ reviews, reverse = false }) => {
  const loopReviews = [...reviews, ...reviews];

  return (
    <CommonReviewMarquee>
      <CommonReviewTrack $reverse={reverse}>
        {loopReviews.map((review, index) => (
          <CommonReviewCard key={`${review.author}-${index}-${reverse}`}>
            <div className="rating">★★★★★</div>
            <p>{review.content}</p>
            <strong>{review.author}</strong>
          </CommonReviewCard>
        ))}
      </CommonReviewTrack>
    </CommonReviewMarquee>
  );
};

const ReviewMarquee = ({ reviews = [] }) => {
  return (
    <>
      <ReviewRow reviews={reviews} />
      <ReviewRow reviews={reviews} reverse />
    </>
  );
};

export default ReviewMarquee;
