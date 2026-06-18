import ProcessCardList from "../../../components/common/ProcessCardList";
import { SERVICE_PROCESS } from "../../../constants/landing";

const LandingProcess = () => {
  return (
    <section className="mt-24 max-md:mt-16">
      <div className="mb-[34px] mx-auto max-w-[820px] text-center">
        <h2 className="text-[clamp(26px,3vw,38px)] font-black leading-[1.2] text-we-white">
          서비스 제작 진행 과정
        </h2>
        <p className="mt-3 break-keep leading-[1.8] text-we-gray-500">
          상담부터 사후관리까지 6단계로 책임지고 진행합니다.
        </p>
      </div>
      <ProcessCardList items={SERVICE_PROCESS} />
    </section>
  );
};

export default LandingProcess;
