import { Inner, Section } from "../../../styles/layout/layout";
import { CARE_PLANS } from "../../../constants/pricing";
import SectionTitle from "../../../components/common/SectionTitle";
import PlanList from "../../../components/common/PlanList";

const WeflowCare = () => {
  return (
    <Section>
      <Inner>
        <SectionTitle title="WEFLOW 케어 플랜" align="center" />
        <PlanList plans={CARE_PLANS} />
      </Inner>
    </Section>
  );
};

export default WeflowCare;
