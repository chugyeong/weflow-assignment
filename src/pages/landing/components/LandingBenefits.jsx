import { LANDING_BENEFITS } from "../../../constants/landing";

const cardClass =
  "relative overflow-hidden rounded-[10px] border border-we-gray-700 bg-we-black/80 p-[22px] transition before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_220px_at_var(--spotlight-x)_var(--spotlight-y),rgba(255,255,255,0.12)_0%,rgba(37,99,235,0.14)_35%,rgba(37,99,235,0)_70%)] before:content-[''] hover:border-we-blue-300 [&>*]:relative [&>*]:z-[1]";

const LandingBenefits = () => {
  return (
    <section className="mt-24 max-md:mt-16">
      <div className="mb-[34px] max-w-[820px]">
        <h2 className="text-[clamp(26px,3vw,38px)] font-black leading-[1.2] text-we-white">
          제작부터 운영, 광고, 관리까지 한 번에
        </h2>
        <p className="mt-3 break-keep leading-[1.8] text-we-gray-500">
          사람들은 검색하고 비교한 뒤 문의합니다. WEFLOW는 랜딩페이지, 홈페이지, 광고, 사후관리까지
          필요한 구조를 한 번에 연결합니다.
        </p>
      </div>
      <ul className="grid grid-cols-5 gap-4 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1">
        {LANDING_BENEFITS.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <li key={benefit.title} className={cardClass}>
              <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-we-blue-500 text-we-white">
                <Icon size={20} />
              </div>
              <h3 className="text-xl text-we-white">{benefit.title}</h3>
              <p className="mt-2.5 leading-[1.7] text-we-gray-500">{benefit.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default LandingBenefits;
