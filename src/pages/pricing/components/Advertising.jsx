import { Inner, Section } from "../../../styles/layout/layout";
import SectionTitle from "../../../components/common/SectionTitle";
import { ADVERTISING_PLANS } from "../../../constants/pricing";
import PlanList from "../../../components/common/PlanList";

const Advertising = () => {
  return (
    <Section>
      <Inner>
        <SectionTitle title="광고 플랜" align="center" />
        <PlanList plans={ADVERTISING_PLANS} />
      </Inner>
    </Section>
  );
};

export default Advertising;
