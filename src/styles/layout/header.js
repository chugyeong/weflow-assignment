import { Link } from "react-router-dom";
import { tw } from "../tw";

export const Container = tw(
  "header",
  "sticky top-0 z-[100] isolate overflow-visible border-b border-white/10 bg-we-black/82 shadow-[0_12px_45px_rgba(0,0,0,0.24)] backdrop-blur-xl",
);

export const Inner = tw(
  "div",
  "relative z-[1] mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-5 max-[900px]:h-[60px] max-[900px]:px-4",
);

export const Logo = tw(
  Link,
  "flex items-center gap-2.5 text-2xl font-black tracking-[0] text-we-white max-[900px]:gap-2 max-[900px]:text-lg [&_img]:w-11 [&_img]:object-contain max-[900px]:[&_img]:w-8 [&_span]:bg-[linear-gradient(90deg,#fff,#58e6ff)] [&_span]:bg-clip-text [&_span]:text-transparent",
);

export const Nav = tw(
  "nav",
  "flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 [&_a]:relative [&_a]:rounded-full [&_a]:px-4 [&_a]:py-2 [&_a]:text-sm [&_a]:font-semibold [&_a]:text-we-gray-300 [&_a]:transition-all [&_a:hover]:bg-white/8 [&_a:hover]:text-we-white [&_a.active]:bg-we-blue-300 [&_a.active]:text-white [&_a.active]:shadow-[0_10px_26px_rgba(37,99,235,0.28)] max-[900px]:absolute max-[900px]:left-4 max-[900px]:right-4 max-[900px]:top-[60px] max-[900px]:w-auto max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-1 max-[900px]:overflow-hidden max-[900px]:rounded-[14px] max-[900px]:border-white/10 max-[900px]:bg-we-black/95 max-[900px]:p-2 max-[900px]:shadow-we-black max-[900px]:backdrop-blur-xl max-[900px]:transition-all max-[900px]:[&_a]:px-3 max-[900px]:[&_a]:py-1.5 max-[900px]:[&_a]:text-[13px]",
  ({ $isOpen }) =>
    $isOpen
      ? "max-[900px]:max-h-[360px] max-[900px]:border max-[900px]:border-we-gray-700 max-[900px]:p-2 max-[900px]:opacity-100"
      : "max-[900px]:max-h-0 max-[900px]:border-0 max-[900px]:p-0 max-[900px]:opacity-0 max-[900px]:pointer-events-none",
);

export const MobileMenuButton = tw(
  "button",
  "hidden text-we-gray-100 max-[900px]:flex max-[900px]:h-9 max-[900px]:w-9 max-[900px]:items-center max-[900px]:justify-center max-[900px]:rounded-full max-[900px]:border max-[900px]:border-white/10 max-[900px]:bg-white/5 max-[900px]:transition-colors max-[900px]:hover:border-we-blue-300 max-[900px]:hover:text-we-blue-100",
);

export const DiagnosisButton = tw(
  Link,
  "relative z-[1] overflow-hidden rounded-full bg-[linear-gradient(135deg,#58e6ff,#3b82f6)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_32px_rgba(37,99,235,0.35)] transition-transform hover:-translate-y-0.5 max-[900px]:hidden",
);
