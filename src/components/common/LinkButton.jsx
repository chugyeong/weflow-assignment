import { StyledLink } from "../../styles/common/components";

const LinkButton = ({ label = "", to = "", icon = null }) => {
  return (
    <StyledLink to={to}>
      <span>{label}</span>
      {icon && icon}
    </StyledLink>
  );
};

export default LinkButton;
