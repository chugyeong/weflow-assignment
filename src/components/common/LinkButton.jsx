import { Link } from "react-router-dom";

const LinkButton = ({ label = "", to = "", icon = null }) => {
  return (
    <Link
      className="relative z-[1] flex h-[52px] items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] px-6 text-[clamp(14px,1.4vw,15px)] font-extrabold leading-[52px] text-white shadow-[0_14px_34px_rgba(37,99,235,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(37,99,235,0.42)] max-[640px]:h-10 max-[640px]:gap-1.5 max-[640px]:px-3.5 max-[640px]:text-[13px] max-[640px]:leading-10 max-[640px]:[&_svg]:h-3.5 max-[640px]:[&_svg]:w-3.5"
      to={to}>
      <span>{label}</span>
      {icon && icon}
    </Link>
  );
};

export default LinkButton;
