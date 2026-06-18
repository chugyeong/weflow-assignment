const ReservationSummaryCard = () => {
  return (
    <aside className="relative overflow-hidden rounded-[10px] border border-we-gray-700 bg-we-black/80 p-7 transition before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_220px_at_var(--spotlight-x)_var(--spotlight-y),rgba(255,255,255,0.12)_0%,rgba(37,99,235,0.14)_35%,rgba(37,99,235,0)_70%)] before:content-[''] hover:border-we-blue-300 [&>*]:relative [&>*]:z-[1]">
      <strong className="mb-3.5 block text-[clamp(22px,2.4vw,30px)] text-we-white">
        예약 정보
      </strong>
      <p className="mb-[22px] leading-[1.7] text-we-gray-300">
        운영 시간은 오전 9시부터 오후 6시 30분까지이며, 오늘 이미 지난 시간은 선택할
        수 없습니다.
      </p>
      <ul>
        <li className="mb-3 flex items-center gap-2.5 text-[clamp(12px,1.2vw,14px)] text-we-gray-400 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-we-blue-300 before:content-['']">
          30분 단위 상담 시간 선택
        </li>
        <li className="mb-3 flex items-center gap-2.5 text-[clamp(12px,1.2vw,14px)] text-we-gray-400 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-we-blue-300 before:content-['']">
          원하는 시간 직접 입력 가능
        </li>
        <li className="flex items-center gap-2.5 text-[clamp(12px,1.2vw,14px)] text-we-gray-400 before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-we-blue-300 before:content-['']">
          예약 신청 내역은 관리자 페이지에 저장
        </li>
      </ul>
    </aside>
  );
};

export default ReservationSummaryCard;
