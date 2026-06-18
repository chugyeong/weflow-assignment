import { Check, Crown } from "lucide-react";
import { CommonPlanCard, CommonPlanGrid } from "../../styles/common/components";

const formatPrice = (price) => price.toLocaleString("ko-KR");

const PlanList = ({ plans = [] }) => {
  return (
    <CommonPlanGrid>
      {plans.map((plan) => (
        <CommonPlanCard key={plan.name} $featured={plan.featured}>
          {plan.featured && (
            <span className="crown">
              <Crown size={20} fill="currentColor" />
            </span>
          )}
          {plan.tag && <span className="badge">{plan.tag}</span>}
          <h3>{plan.name}</h3>
          {plan.description && <p className="description">{plan.description}</p>}
          <div className="price">
            {plan.price?.original && (
              <p className="original">{formatPrice(plan.price.original)}원</p>
            )}
            {plan.price?.sale && (
              <strong className="sale">
                {plan.price.unit ? `${plan.price.unit} ` : ""}
                {formatPrice(plan.price.sale)}원{plan.price.suffix ?? ""}
              </strong>
            )}
            <span className="vat">VAT 포함</span>
          </div>
          <ul className="features">
            {plan.features.map((feature) => (
              <li key={feature}>
                <Check size={15} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CommonPlanCard>
      ))}
    </CommonPlanGrid>
  );
};

export default PlanList;
