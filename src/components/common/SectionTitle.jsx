import { SectionTitleText } from "../../styles/common/components";

const SectionTitle = ({ title, desc, action, align = "left" }) => {
  return (
    <SectionTitleText $align={align}>
      <div className="content">
        <h2>{title}</h2>
        {desc && <p>{desc}</p>}
      </div>
      {action && <div className="action">{action}</div>}
    </SectionTitleText>
  );
};

export default SectionTitle;
