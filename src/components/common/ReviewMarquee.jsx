const ReviewRow = ({ reviews, reverse = false }) => {
  const loopReviews = [...reviews, ...reviews];

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex w-max gap-4 max-[640px]:gap-2.5 ${
          reverse
            ? "mb-0 animate-[slideRight_100s_linear_infinite]"
            : "mb-4 animate-[slideLeft_100s_linear_infinite]"
        }`}>
        {loopReviews.map((review, index) => (
          <article
            key={`${review.author}-${index}-${reverse}`}
            className="basis-[320px] shrink-0 grow-0 rounded-[10px] border border-we-gray-700 bg-[#0b1122]/95 p-5 max-[640px]:basis-[232px] max-[640px]:rounded-[9px] max-[640px]:p-3">
            <div className="text-[#fdc700]">★★★★★</div>
            <p className="my-2.5 min-h-12 leading-[1.6] text-we-gray-100 max-[640px]:my-1.5 max-[640px]:min-h-9 max-[640px]:text-xs max-[640px]:leading-[1.45]">{review.content}</p>
            <strong className="text-sm text-we-gray-500 max-[640px]:text-[11px]">{review.author}</strong>
          </article>
        ))}
      </div>
    </div>
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
