import { FileText, MessageCircle, Phone, SearchCheck } from "lucide-react";

export const NAV_ITEMS = [
  { to: "/", label: "홈" },
  { to: "/service", label: "서비스" },
  { to: "/pricing", label: "제작플랜&가격안내" },
  { to: "/cases", label: "성공사례" },
  { to: "/reservation", label: "예약" },
];

export const FOOTER_MENUS = [
  {
    title: "서비스",
    path: "/service",
    items: ["홈페이지 제작 과정", "랜딩페이지 제작", "광고 운영 및 관리"],
  },
  {
    title: "플랜",
    path: "/pricing",
    items: ["제작 플랜", "케어 플랜", "광고 플랜"],
  },
];

export const FOOTER_SOCIAL_LINKS = [
  {
    key: "kakao",
    label: "카카오톡",
    link: "https://pf.kakao.com/_xntCbX",
  },
  {
    key: "blog",
    label: "블로그",
    link: "https://m.blog.naver.com/weflowlab",
  },
  {
    key: "instagram",
    label: "인스타그램",
    link: "https://www.instagram.com/weflowlab.kr?igsh=b2c1eTdwbHo2bWRt",
  },
  {
    key: "facebook",
    label: "페이스북",
    link: "https://www.facebook.com/profile.php?id=61590187124682&sk=about",
  },
];

export const FIXED_FOOTER_MENUS = [
  {
    label: "24시간 상담",
    icon: Phone,
    link: "tel:010-2971-7280",
    color: "text-emerald-300",
  },
  {
    label: "카카오 문의",
    icon: MessageCircle,
    link: "https://pf.kakao.com/_xntCbX",
    color: "text-yellow-300",
  },
  {
    label: "블로그",
    icon: FileText,
    link: "https://m.blog.naver.com/weflowlab",
    color: "text-sky-300",
  },
  {
    label: "무료진단",
    icon: SearchCheck,
    link: "/diagnosis",
    color: "text-we-blue-100",
  },
];
