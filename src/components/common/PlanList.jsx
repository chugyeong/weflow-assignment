import { Check, Crown } from "lucide-react";

const formatPrice = (price) => price.toLocaleString("ko-KR");

const PlanList = ({ plans = [] }) => {
  return (
    <ul className="mx-auto flex w-full flex-wrap justify-center gap-6 max-[640px]:gap-3.5">
      {plans.map((plan, index) => {
        const isFeatured = index === 2;

        return (
          <li
            key={plan.name}
            className={`
              group relative flex min-h-full w-[340px] max-w-full flex-col overflow-visible
              rounded-[18px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.105),rgba(255,255,255,0.032))]
              p-6 text-left shadow-[0_18px_54px_rgba(0,0,0,0.26)] backdrop-blur-xl max-[640px]:w-[min(100%,320px)] max-[640px]:p-3.5
              transition duration-500 hover:-translate-y-1 max-[380px]:w-full max-[380px]:p-3.5
              before:pointer-events-none before:absolute before:inset-x-5 before:top-0 before:h-px
              before:opacity-60
              after:pointer-events-none after:absolute after:inset-0 after:-z-[1]
              after:rounded-[18px] after:opacity-0 after:transition-opacity after:duration-500
              hover:after:opacity-100
              ${
                isFeatured
                  ? `
                    border-[#f97316]/65
                    bg-[linear-gradient(180deg,rgba(251,191,36,0.14),rgba(255,255,255,0.035))]
                    shadow-[0_26px_78px_rgba(249,115,22,0.2)]
                    before:bg-[linear-gradient(90deg,transparent,#facc15,transparent)]
                    before:opacity-100
                    after:bg-[radial-gradient(280px_circle_at_50%_0%,rgba(251,146,60,0.14),transparent_62%)]
                    hover:border-[#fb923c]/45 hover:shadow-[0_26px_76px_rgba(249,115,22,0.2)]
                  `
                  : `
                    border-white/10
                    before:bg-[linear-gradient(90deg,transparent,rgba(88,230,255,0.8),transparent)]
                    after:bg-[radial-gradient(280px_circle_at_50%_0%,rgba(88,230,255,0.12),transparent_62%)]
                    hover:border-we-blue-300/35 hover:shadow-[0_26px_76px_rgba(37,99,235,0.18)]
                  `
              }
            `}>
            {isFeatured && (
              <span
                className="
                  absolute right-[30px] -top-5 z-10 flex h-11 w-11 items-center justify-center max-[640px]:right-5 max-[640px]:h-9 max-[640px]:w-9
                  rounded-full border-2 border-[#9a3412] bg-[linear-gradient(135deg,#fb923c,#facc15)]
                  text-[#111827] shadow-[0_16px_38px_rgba(249,115,22,0.42)]
                ">
                <Crown className="h-5 w-5 max-[640px]:h-4 max-[640px]:w-4" fill="currentColor" />
              </span>
            )}
            {plan.tag && (
              <span
                className={`
                  mb-4 inline-flex w-fit rounded-full border border-white/10 px-3 py-1.5
                  text-xs font-black max-[640px]:mb-3 max-[640px]:px-2.5 max-[640px]:py-1 max-[640px]:text-[11px]
                  ${isFeatured ? "border-[#facc15]/35 bg-[#f97316] text-white" : "bg-we-blue-500 text-we-white"}
                `}>
                {plan.tag}
              </span>
            )}
            <h3 className="break-keep text-[clamp(23px,2.4vw,31px)] font-black leading-[1.12] text-we-white max-[640px]:text-[20px]">
              {plan.name}
            </h3>
            {plan.description && (
              <p className="mt-2 min-h-12 break-keep leading-[1.65] text-we-gray-300 max-[640px]:min-h-0 max-[640px]:text-[13px] max-[640px]:leading-[1.5]">
                {plan.description}
              </p>
            )}
            <div
              className={`
                mt-5 w-full border-t border-white/10 pt-5 text-left max-[640px]:mt-4 max-[640px]:pt-4
                ${isFeatured ? "border-[#facc15]/25" : ""}
              `}>
              {plan.price?.original && (
                <p className="text-sm font-black text-we-gray-500 line-through max-[640px]:text-xs">
                  {formatPrice(plan.price.original)}원
                </p>
              )}
              {plan.price?.sale && (
                <strong
                  className={`
                    mt-1 block break-keep text-[clamp(25px,2.6vw,34px)] font-black leading-[1.08] text-we-white"} max-[640px]:text-[22px]
                  `}>
                  {plan.price.unit ? `${plan.price.unit} ` : ""}
                  {formatPrice(plan.price.sale)}원{plan.price.suffix ?? ""}
                </strong>
              )}
              <span className="mt-2 inline-flex rounded-full bg-white/[0.055] px-2.5 py-1 text-xs font-extrabold text-we-gray-400 max-[640px]:text-[11px]">
                VAT 포함
              </span>
            </div>
            <ul className="mt-6 grid gap-3 border-t border-white/10 pt-6 max-[640px]:mt-4 max-[640px]:gap-2 max-[640px]:pt-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start justify-start gap-2 text-left leading-[1.55] text-we-gray-300 max-[640px]:text-[13px] max-[640px]:leading-[1.45]">
                  <Check
                    className={`
                      mt-0.5 h-[15px] w-[15px] shrink-0 rounded-full p-0.5 max-[640px]:h-3.5 max-[640px]:w-3.5
                      ${isFeatured ? "bg-[#fb923c]/12 text-[#fdba74]" : "bg-we-blue-300/12 text-we-blue-100"}
                    `}
                  />
                  <span className="min-w-0">{feature}</span>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default PlanList;
