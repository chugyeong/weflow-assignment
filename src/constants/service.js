import {
  ClipboardCheck,
  Code2,
  FileText,
  Hash,
  Lightbulb,
  Megaphone,
  Palette,
  Search,
  TrendingUp,
} from "lucide-react";

export const PRODUCTION_PROCESS = [
  {
    title: "상담 · 진단",
    description: "업종과 제작 방향을 확인합니다.",
    icon: ClipboardCheck,
  },
  {
    title: "기획 · 설계",
    description: "문의 구조와 전략을 설계합니다.",
    icon: Lightbulb,
  },
  {
    title: "디자인",
    description: "브랜드에 맞는 화면을 구성합니다.",
    icon: Palette,
  },
  {
    title: "개발 · 테스트",
    description: "기능 구현, 최적화, 검수 및 수정을 진행합니다.",
    icon: Code2,
  },
  {
    title: "SEO 상단등록",
    description: "네이버, 구글, 사이트맵 등록을 준비합니다.",
    icon: Search,
  },
  {
    title: "광고운영 · 사후관리",
    description: "인스타, 블로그, 키워드 광고 운영을 관리합니다.",
    icon: Megaphone,
  },
];

export const MANAGEMENT_SERVICES = [
  {
    title: "콘텐츠 업로드",
    icon: FileText,
    items: ["블로그 업로드", "인스타 업로드", "릴스 업로드"],
  },
  {
    title: "키워드 광고",
    icon: Hash,
    items: ["네이버 키워드 업로드", "플레이스 키워드 업로드"],
  },
  {
    title: "검색 상단등록",
    icon: TrendingUp,
    items: ["네이버 서치어드바이저 등록", "구글 콘솔 등록", "사이트맵 등록"],
  },
];
