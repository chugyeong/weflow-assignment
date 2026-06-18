import { CommonProcessCard, CommonProcessGrid } from "../../styles/common/components";

const ProcessCardList = ({ items = [] }) => {
  return (
    <CommonProcessGrid>
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <CommonProcessCard key={item.title}>
            {Icon && (
              <div className="icon">
                <Icon size={20} />
              </div>
            )}
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </CommonProcessCard>
        );
      })}
    </CommonProcessGrid>
  );
};

export default ProcessCardList;
