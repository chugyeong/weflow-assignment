import { Link } from "react-router-dom";
import { cn, tw } from "../tw";

const ctaBase =
  "flex h-[52px] items-center justify-center rounded-full px-6 text-[clamp(14px,1.4vw,15px)] leading-[52px]";

export const SectionTitleText = tw(
  "div",
  "mb-12 flex items-end gap-5 [&_.action]:shrink-0 [&_h2]:max-w-[820px] [&_h2]:break-keep [&_h2]:text-[clamp(30px,4vw,48px)] [&_h2]:font-black [&_h2]:leading-[1.12] [&_h2]:tracking-[0] [&_h2]:text-we-white [&_p]:mt-3 [&_p]:max-w-[720px] [&_p]:break-keep [&_p]:leading-[1.8] [&_p]:text-we-gray-400 [&_button]:flex [&_button]:items-center [&_button]:gap-[5px] [&_button]:rounded-full [&_button]:border [&_button]:border-white/10 [&_button]:px-4 [&_button]:py-2 [&_button]:text-[clamp(14px,1.5vw,16px)] [&_button]:font-extrabold [&_button]:text-we-blue-100 [&_button]:transition [&_button:hover]:bg-white/5",
  ({ $align }) =>
    $align === "center"
      ? "justify-center text-center [&_.content]:flex-none"
      : "justify-between [&_.content]:flex-1",
);

export const StyledLink = tw(
  Link,
  cn(
    ctaBase,
    "relative z-[1] gap-2.5 overflow-hidden bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] font-extrabold text-white shadow-[0_14px_34px_rgba(37,99,235,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(37,99,235,0.42)]",
  ),
);

export const CommonFormPanel = tw(
  "form",
  "rounded-[16px] border border-white/10 bg-white/[0.045] p-7 shadow-we-black backdrop-blur-xl max-[640px]:p-5",
);

export const CommonFormRow = tw("div", "grid grid-cols-2 gap-4 max-[640px]:grid-cols-1");

export const CommonFieldGroup = CommonFormRow;

export const CommonField = tw(
  "label",
  "mb-5 flex flex-col gap-2.5 [&>span]:text-[clamp(12px,1.2vw,14px)] [&>span]:font-extrabold [&>span]:text-we-gray-100 [&_input]:min-h-12 [&_input]:w-full [&_input]:rounded-[12px] [&_input]:border [&_input]:border-white/10 [&_input]:bg-we-black/70 [&_input]:px-3.5 [&_input]:text-we-gray-100 [&_input]:transition [&_input:focus]:border-we-blue-300 [&_input:focus]:bg-we-black [&_input:focus]:shadow-[0_0_0_3px_rgba(59,130,246,0.22)] [&_input::placeholder]:text-we-gray-500 [&_select]:min-h-12 [&_select]:w-full [&_select]:cursor-pointer [&_select]:appearance-none [&_select]:rounded-[12px] [&_select]:border [&_select]:border-white/10 [&_select]:bg-we-black/70 [&_select]:px-3.5 [&_select]:pr-11 [&_select]:text-we-gray-100 [&_select]:transition [&_select:focus]:border-we-blue-300 [&_select:focus]:bg-we-black [&_select:focus]:shadow-[0_0_0_3px_rgba(59,130,246,0.22)] [&_textarea]:min-h-[120px] [&_textarea]:w-full [&_textarea]:resize-none [&_textarea]:rounded-[12px] [&_textarea]:border [&_textarea]:border-white/10 [&_textarea]:bg-we-black/70 [&_textarea]:p-3.5 [&_textarea]:leading-[1.6] [&_textarea]:text-we-gray-100 [&_textarea]:transition [&_textarea]:[scrollbar-color:#334155_transparent] [&_textarea]:[scrollbar-width:thin] [&_textarea:focus]:border-we-blue-300 [&_textarea:focus]:bg-we-black [&_textarea:focus]:shadow-[0_0_0_3px_rgba(59,130,246,0.22)] [&_textarea::placeholder]:text-we-gray-500 [&_textarea::-webkit-scrollbar]:w-2 [&_textarea::-webkit-scrollbar-track]:bg-transparent [&_textarea::-webkit-scrollbar-thumb]:rounded-full [&_textarea::-webkit-scrollbar-thumb]:bg-we-gray-700 [&_input[type='date']]:cursor-pointer [&_input[type='date']::-webkit-calendar-picker-indicator]:invert [&_input[type='date']::-webkit-calendar-picker-indicator]:cursor-pointer",
);

export const CommonAgreement = tw(
  "label",
  "my-1 mb-5 flex cursor-pointer items-center gap-2.5 text-we-gray-300 [&_input]:h-[18px] [&_input]:w-[18px] [&_input]:shrink-0 [&_input]:accent-we-blue-300",
);

export const CommonSubmitButton = tw(
  "button",
  cn(
    ctaBase,
    "w-full bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] font-extrabold text-white shadow-[0_14px_34px_rgba(37,99,235,0.32)] transition hover:enabled:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45",
  ),
);

export const CommonPlanGrid = tw("ul", "mx-auto flex w-full flex-wrap justify-center gap-6");

export const CommonPlanCard = tw(
  "li",
  "group relative flex min-h-full w-[340px] max-w-full flex-col overflow-visible rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.105),rgba(255,255,255,0.032))] p-6 text-left shadow-[0_18px_54px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-500 before:pointer-events-none before:absolute before:inset-x-5 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(88,230,255,0.8),transparent)] before:opacity-60 after:pointer-events-none after:absolute after:inset-0 after:-z-[1] after:rounded-[18px] after:bg-[radial-gradient(280px_circle_at_50%_0%,rgba(88,230,255,0.12),transparent_62%)] after:opacity-0 after:transition-opacity after:duration-500 hover:-translate-y-1 hover:border-we-blue-300/35 hover:shadow-[0_26px_76px_rgba(37,99,235,0.18)] hover:after:opacity-100 max-[380px]:w-full [&_.crown]:absolute [&_.crown]:-left-4 [&_.crown]:-top-5 [&_.crown]:z-10 [&_.crown]:flex [&_.crown]:h-11 [&_.crown]:w-11 [&_.crown]:items-center [&_.crown]:justify-center [&_.crown]:rounded-full [&_.crown]:border-2 [&_.crown]:border-[#fff7ed] [&_.crown]:bg-[linear-gradient(135deg,#fb923c,#facc15)] [&_.crown]:text-[#111827] [&_.crown]:shadow-[0_16px_38px_rgba(249,115,22,0.42)] [&_.badge]:mb-4 [&_.badge]:inline-flex [&_.badge]:w-fit [&_.badge]:rounded-full [&_.badge]:border [&_.badge]:border-white/10 [&_.badge]:px-3 [&_.badge]:py-1.5 [&_.badge]:text-xs [&_.badge]:font-black [&_.choice]:mt-3 [&_.choice]:inline-flex [&_.choice]:w-fit [&_.choice]:rounded-full [&_.choice]:border [&_.choice]:border-white/10 [&_.choice]:bg-white/[0.04] [&_.choice]:px-3 [&_.choice]:py-1.5 [&_.choice]:text-xs [&_.choice]:font-extrabold [&_.choice]:text-we-gray-300 [&_h3]:break-keep [&_h3]:text-[clamp(23px,2.4vw,31px)] [&_h3]:font-black [&_h3]:leading-[1.12] [&_h3]:text-we-white [&_.description]:mt-2 [&_.description]:min-h-12 [&_.description]:break-keep [&_.description]:leading-[1.65] [&_.description]:text-we-gray-300 [&_.price]:mt-5 [&_.price]:w-full [&_.price]:border-t [&_.price]:border-white/10 [&_.price]:pt-5 [&_.price]:text-left [&_.original]:text-sm [&_.original]:font-black [&_.original]:text-we-gray-500 [&_.original]:line-through [&_.sale]:mt-1 [&_.sale]:block [&_.sale]:break-keep [&_.sale]:text-[clamp(25px,2.6vw,34px)] [&_.sale]:font-black [&_.sale]:leading-[1.08] [&_.sale]:text-we-white [&_.vat]:mt-2 [&_.vat]:inline-flex [&_.vat]:rounded-full [&_.vat]:bg-white/[0.055] [&_.vat]:px-2.5 [&_.vat]:py-1 [&_.vat]:text-xs [&_.vat]:font-extrabold [&_.vat]:text-we-gray-400 [&_.features]:my-6 [&_.features]:grid [&_.features]:gap-3 [&_.features]:border-t [&_.features]:border-white/10 [&_.features]:pt-6 [&_.features_li]:flex [&_.features_li]:items-start [&_.features_li]:justify-start [&_.features_li]:gap-2.5 [&_.features_li]:text-left [&_.features_li]:leading-[1.55] [&_.features_li]:text-we-gray-300 [&_.features_li_span]:min-w-0 [&_.features_svg]:mt-0.5 [&_.features_svg]:shrink-0 [&_.features_svg]:rounded-full [&_.features_svg]:bg-we-blue-300/12 [&_.features_svg]:p-0.5 [&_.features_svg]:text-we-blue-100",
  ({ $featured }) =>
    $featured
      ? "border border-[#f97316]/65 bg-[linear-gradient(180deg,rgba(251,191,36,0.14),rgba(255,255,255,0.035))] shadow-[0_26px_78px_rgba(249,115,22,0.2)] before:bg-[linear-gradient(90deg,transparent,#facc15,transparent)] before:opacity-100 [&_.badge]:border-[#facc15]/35 [&_.badge]:bg-[#f97316] [&_.badge]:text-white [&_.choice]:border-[#facc15]/25 [&_.choice]:bg-[#f59e0b]/10 [&_.price]:border-[#facc15]/25 [&_.sale]:text-[#fde68a]"
      : "border border-white/10 [&_.badge]:bg-we-blue-500 [&_.badge]:text-we-white",
);

export const CommonProcessGrid = tw(
  "ul",
  "grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1",
);

export const CommonProcessCard = tw(
  "li",
  "rounded-[16px] border border-white/10 bg-white/[0.045] p-[22px] shadow-we-gray backdrop-blur-xl transition hover:-translate-y-1.5 hover:border-we-blue-300/70 [&_.icon]:flex [&_.icon]:h-[42px] [&_.icon]:w-[42px] [&_.icon]:items-center [&_.icon]:justify-center [&_.icon]:rounded-[12px] [&_.icon]:border [&_.icon]:border-white/10 [&_.icon]:bg-white/5 [&_.icon]:text-we-blue-100 [&_span]:mt-[18px] [&_span]:block [&_span]:text-xs [&_span]:font-extrabold [&_span]:text-we-blue-300 [&_h3]:mt-2 [&_h3]:text-xl [&_h3]:text-we-white [&_p]:mt-2.5 [&_p]:leading-[1.7] [&_p]:text-we-gray-500",
);

export const CommonReviewMarquee = tw("div", "w-full overflow-hidden");

export const CommonReviewTrack = tw("div", "flex w-max gap-4", ({ $reverse }) =>
  $reverse
    ? "mb-0 animate-[slideRight_100s_linear_infinite]"
    : "mb-4 animate-[slideLeft_100s_linear_infinite]",
);

export const CommonReviewCard = tw(
  "article",
  "basis-[320px] shrink-0 grow-0 rounded-[10px] border border-we-gray-700 bg-[#0b1122]/95 p-5 [&_.rating]:text-[#fdc700] [&_p]:my-2.5 [&_p]:min-h-12 [&_p]:leading-[1.6] [&_p]:text-we-gray-100 [&_strong]:text-sm [&_strong]:text-we-gray-500",
);
