import { tw } from "../tw";

const sectionBase =
  "relative z-[1] w-full overflow-hidden px-5 py-28 max-md:px-4 max-md:py-12 max-[480px]:py-10 " +
  "[&.point1]:bg-[radial-gradient(520px_circle_at_18%_18%,rgba(59,130,246,0.18),transparent_62%),radial-gradient(420px_circle_at_86%_72%,rgba(88,230,255,0.1),transparent_58%),#0b1020] " +
  "[&.point2]:bg-[radial-gradient(560px_circle_at_80%_20%,rgba(88,230,255,0.12),transparent_60%),radial-gradient(520px_circle_at_20%_72%,rgba(59,130,246,0.16),transparent_58%),#0d1426] " +
  "[&.point3]:bg-[radial-gradient(540px_circle_at_50%_-8%,rgba(20,184,166,0.14),transparent_62%),radial-gradient(480px_circle_at_100%_52%,rgba(59,130,246,0.14),transparent_60%),#09111f]";

export const Root = tw("div", "flex min-h-screen flex-col pb-16 max-md:pb-12");
export const Content = tw("main", "flex-1");
export const Section = tw("section", sectionBase);
export const Inner = tw("div", "relative z-[1] mx-auto w-full max-w-[1180px]");
