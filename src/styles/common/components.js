import { tw } from "../tw";

export const Field = tw("label", "mb-5 flex flex-col gap-2.5 max-[640px]:mb-4 max-[640px]:gap-2");
export const FieldLabel = tw(
  "span",
  "text-[clamp(12px,1.2vw,14px)] font-extrabold text-we-gray-100 max-[640px]:text-xs",
);
export const FieldInput = tw(
  "input",
  "min-h-12 w-full rounded-[12px] border border-white/10 bg-we-black/70 px-3.5 text-we-gray-100 transition focus:border-we-blue-300 focus:bg-we-black focus:shadow-[0_0_0_3px_rgba(59,130,246,0.22)] placeholder:text-we-gray-500 max-[640px]:min-h-10 max-[640px]:px-3 max-[640px]:text-[13px]",
);

export const Form = tw("div", "grid grid-cols-2 gap-4 max-[640px]:grid-cols-1 max-[640px]:gap-0");

export const FormPanel = tw(
  "form",
  "rounded-[16px] border border-white/10 bg-white/[0.045] p-7 shadow-we-black backdrop-blur-xl max-[640px]:rounded-[13px] max-[640px]:p-3.5",
);

export const Agreement = tw(
  "label",
  "my-1 mb-5 flex cursor-pointer items-center gap-2.5 text-we-gray-300 max-[640px]:mb-3.5 max-[640px]:gap-2 max-[640px]:text-[13px] [&_input]:h-[18px] [&_input]:w-[18px] [&_input]:shrink-0 [&_input]:accent-we-blue-300 max-[640px]:[&_input]:h-3.5 max-[640px]:[&_input]:w-3.5",
);

export const SubmitButton = tw(
  "button",
  "flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] px-6 text-[clamp(14px,1.4vw,15px)] font-extrabold leading-[52px] text-white shadow-[0_14px_34px_rgba(37,99,235,0.32)] transition hover:enabled:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 max-[640px]:h-10 max-[640px]:px-3.5 max-[640px]:text-[13px] max-[640px]:leading-10",
);
