import { Inner, Section } from "../../../styles/layout/layout";
import { PRODUCTION_PLANS } from "../../../constants/pricing";
import SectionTitle from "../../../components/common/SectionTitle";
import PlanList from "../../../components/common/PlanList";

const Production = () => {
  return (
    <Section>
      <Inner>
        <SectionTitle title="제작 플랜" align="center" />
        <PlanList plans={PRODUCTION_PLANS} />
      </Inner>
    </Section>
  );
};

export default Production;
