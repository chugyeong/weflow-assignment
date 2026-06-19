import PlanList from "../../../components/common/PlanList";
import { ADVERTISING_PLANS, CARE_PLANS, PRODUCTION_PLANS } from "../../../constants/landing";

const titleClass = "mb-[34px] mx-auto max-w-[820px] text-center max-[640px]:mb-6";
const headingClass = "text-[clamp(26px,3vw,38px)] font-black leading-[1.2] text-we-white max-[640px]:text-[22px]";
const descClass = "mt-3 break-keep leading-[1.8] text-we-gray-500 max-[640px]:mt-2 max-[640px]:text-[13px] max-[640px]:leading-[1.55]";

const LandingPlans = () => {
  return (
    <>
      <section className="mt-24 max-md:mt-10">
        <div className={titleClass}>
          <h2 className={headingClass}>홈페이지 제작 플랜</h2>
          <p className={descClass}>
            랜딩페이지부터 프리미엄 홈페이지까지 목적에 맞는 제작 구성을 선택할 수 있습니다.
          </p>
        </div>
        <PlanList plans={PRODUCTION_PLANS} />
      </section>

      <section className="mt-24 max-md:mt-10">
        <div className={titleClass}>
          <h2 className={headingClass}>WEFLOW CARE PLAN</h2>
          <p className={descClass}>제작 이후 운영, 광고, 관리까지 이어지는 케어 플랜입니다.</p>
        </div>
        <PlanList plans={CARE_PLANS} />
      </section>

      <section className="mt-24 max-md:mt-10">
        <div className={titleClass}>
          <h2 className={headingClass}>광고 연동 플랜</h2>
          <p className={descClass}>검색과 지역 기반 광고를 랜딩페이지 문의 구조에 연결합니다.</p>
        </div>
        <PlanList plans={ADVERTISING_PLANS} />
      </section>
    </>
  );
};

export default LandingPlans;
