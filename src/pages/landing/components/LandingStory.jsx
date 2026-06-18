const LandingStory = () => {
  return (
    <section className="mt-24 max-md:mt-16">
      <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-6 rounded-[10px] border border-we-gray-700 bg-we-black/80 p-[34px] max-[900px]:grid-cols-1 max-[900px]:p-6">
        <strong className="block text-[clamp(26px,3vw,38px)] font-black leading-[1.2] text-we-white">
          홈페이지가 아니라
          <br />
          문의 구조가 필요합니다
        </strong>
        <div>
          <p className="break-keep leading-[1.8] text-we-gray-300">
            인스타, 블로그, 카카오톡, 플레이스 등 다양한 채널에서 고객은 검색하고 비교한 뒤
            문의합니다.
            <br />
            어디를 바꿔야 할지, 광고는 어떻게 해야 할지 고민된다면
            <br />
            WEFLOW가 전환 구조부터 함께 잡아드립니다.
          </p>
          <ul className="mt-[22px] grid gap-3">
            <li className="flex items-center gap-2.5 text-we-gray-100 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-we-blue-100 before:content-['']">
              문의 증가 구조 설계
            </li>
            <li className="flex items-center gap-2.5 text-we-gray-100 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-we-blue-100 before:content-['']">
              업종별 고객 흐름 분석
            </li>
            <li className="flex items-center gap-2.5 text-we-gray-100 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-we-blue-100 before:content-['']">
              상담 버튼 위치 최적화
            </li>
            <li className="flex items-center gap-2.5 text-we-gray-100 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-we-blue-100 before:content-['']">
              모바일 문의 동선 구성
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LandingStory;
