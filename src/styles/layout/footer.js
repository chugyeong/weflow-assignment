import { tw } from "../tw";

export const Container = tw(
  "footer",
  "border-t border-white/10 bg-[radial-gradient(640px_circle_at_18%_0%,rgba(59,130,246,0.18),transparent_58%),radial-gradient(520px_circle_at_90%_20%,rgba(88,230,255,0.08),transparent_55%),#070d1a] px-5 pb-[34px] pt-20 max-md:px-4 max-md:py-8",
);

export const Inner = tw(
  "div",
  "mx-auto grid max-w-[1200px] grid-cols-[minmax(260px,1fr)_max-content_max-content_max-content] gap-10 max-[1024px]:grid-cols-2 max-md:grid-cols-1 max-md:gap-5",
);

export const Left = tw("div", "max-w-[420px] flex-1");
export const Right = tw("div", "flex flex-wrap gap-20 max-md:gap-10");

export const Policy = tw(
  "div",
  "flex flex-wrap items-center justify-end gap-3 max-md:gap-1 [&_button]:text-sm [&_button]:text-we-gray-400 [&_button]:transition [&_button:hover]:text-we-white max-md:[&_button]:text-[10px] [&_span]:text-sm [&_span]:text-we-gray-700 max-md:text-[12px]",
);

export const MenuGroup = tw(
  "div",
  "min-w-40 max-w-[360px] [&_a]:block [&_a]:text-sm [&_a]:leading-[1.9] [&_a]:text-we-gray-300 [&_a]:transition [&_a:hover]:text-we-blue-100 max-md:[&_a]:text-[12px] max-md:[&_a]:leading-[1.55] [&_p]:block [&_p]:break-keep [&_p]:text-sm [&_p]:leading-[1.9] [&_p]:text-we-gray-400 max-md:[&_p]:text-[12px] max-md:[&_p]:leading-[1.55]",
);

export const MenuTitle = tw(
  "h4",
  "mb-5 min-h-10 text-lg font-extrabold text-we-white max-md:mb-1.5 max-md:min-h-0 max-md:text-[13px] [&_p]:mt-4 [&_p]:font-normal [&_p]:text-we-gray-300 max-md:[&_p]:mt-1.5",
);

export const MenuLink = tw(
  "button",
  "mb-1 block !text-[12px] text-we-gray-400 transition hover:translate-x-0.5 hover:text-we-blue-300 last:mb-0 md:mb-3.5 md:!text-sm [&_*]:!text-[inherit]",
);

export const Copyright = tw(
  "div",
  "mt-2.5 text-sm text-we-gray-700 max-md:mt-2 max-md:text-[10px]",
);

export const LegalBar = tw(
  "div",
  "col-span-full mt-8 flex flex-col items-end justify-end border-t border-white/10 pt-6 text-right max-md:mt-1 max-md:pt-4",
);

export const FixedBottomBar = tw(
  "div",
  "fixed bottom-0 left-0 z-[999] w-full border-t border-white/10 bg-[#071022]/88 px-3 pb-[env(safe-area-inset-bottom)] shadow-[0_-18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl [&>div]:mx-auto [&>div]:grid [&>div]:max-w-[1200px] [&>div]:grid-cols-4",
);

export const BottomBarItem = tw(
  "a",
  "group relative flex h-16 flex-col items-center justify-center gap-1 overflow-hidden text-[13px] font-semibold text-we-gray-100 transition duration-300 before:absolute before:inset-x-3 before:top-2 before:h-px before:scale-x-0 before:bg-[linear-gradient(90deg,transparent,#58e6ff,transparent)] before:transition-transform before:duration-300 hover:bg-white/[0.045] hover:text-we-blue-100 hover:before:scale-x-100 max-md:h-[50px] max-md:text-[11px] max-md:[&_svg]:h-4 max-md:[&_svg]:w-4 [&_svg]:drop-shadow-[0_0_8px_rgba(88,230,255,0.28)] [&_svg]:transition [&_svg]:duration-300 [&_svg]:group-hover:-translate-y-0.5",
);

export const SocialList = tw(
  "div",
  "mt-6 flex gap-3 max-md:mt-4 max-md:gap-2.5 [&_a]:flex [&_a]:h-10 [&_a]:w-10 [&_a]:items-center [&_a]:justify-center [&_a]:rounded-[10px] [&_a]:border [&_a]:border-white/15 [&_a]:bg-white/[0.14] [&_a]:transition [&_a:hover]:-translate-y-0.5 [&_a:hover]:border-we-blue-300 [&_a:hover]:bg-we-white max-md:[&_a]:h-9 max-md:[&_a]:w-9 [&_img]:h-[25px] [&_img]:w-[25px] max-md:[&_img]:h-[21px] max-md:[&_img]:w-[21px]",
);
