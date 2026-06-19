import {
  ClipboardCheck,
  Code2,
  Headphones,
  LayoutTemplate,
  Megaphone,
  Palette,
  Search,
  Settings,
  Timer,
  WalletCards,
  Wrench,
} from "lucide-react";

export const LANDING_BENEFITS = [
  {
    title: "빠른 제작 진행",
    description: "랜딩페이지는 3~4일, 홈페이지는 약 1주일 안에 빠르게 제작합니다.",
    icon: Timer,
  },
  {
    title: "합리적인 비용",
    description: "필요한 기능 중심으로 구성해 예산과 완성도의 균형을 맞춥니다.",
    icon: WalletCards,
  },
  {
    title: "24시간 상담 가능",
    description: "문의가 생겼을 때 빠르게 상담하고 피드백을 제공합니다.",
    icon: Headphones,
  },
  {
    title: "제작 후 운영 관리",
    description: "검색 등록, 수정, 유지보수, 운영 관리까지 이어집니다.",
    icon: Wrench,
  },
  {
    title: "광고 연동 지원",
    description: "홈페이지와 광고를 연결해 문의가 들어오는 흐름을 만듭니다.",
    icon: Megaphone,
  },
];

export const LANDING_STORY_POINTS = [
  "문의 증가 구조 설계",
  "업종별 고객 흐름 분석",
  "상담 버튼 위치 최적화",
  "모바일 문의 동선 구성",
];

export const PRODUCTION_PLANS = [
  {
    name: "랜딩페이지",
    tag: "START",
    description: "빠르게 문의 전환 구조를 검증하는 1페이지 구성",
    price: { original: 498000, sale: 249000 },
    features: ["랜딩페이지 1페이지", "3~4일 빠른 제작기간", "반응형 제작 (PC/모바일)", "문의폼 연동", "기본 SEO 설정"],
  },
  {
    name: "홈페이지",
    tag: "GROW",
    description: "서비스 소개와 신뢰 정보를 담는 5페이지 구성",
    price: { original: 1980000, sale: 990000 },
    features: ["홈페이지 5페이지", "1주 빠른 제작기간", "반응형 제작 (PC/모바일)", "문의폼 연동", "카카오톡 상담연동", "기본 SEO 설정"],
  },
  {
    name: "프리미엄",
    tag: "MASTER PREMIUM",
    description: "랜딩과 홈페이지를 함께 설계하는 전환 중심 구성",
    price: { original: 2980000, sale: 1490000 },
    features: ["홈페이지 + 랜딩페이지", "1~2주 빠른 제작기간", "반응형 제작 (PC/모바일)", "프리미엄 디자인", "예약·문의 시스템", "SEO 최적화", "광고 전환 구조 설계"],
  },
];

export const CARE_PLANS = [
  {
    name: "WE CARE",
    tag: "BASIC",
    description: "기본 운영 관리 플랜",
    price: { original: 170000, sale: 89000, unit: "월", suffix: "~" },
    features: ["유지보수(월 수정) 월 1회", "블로그 : 월 1개", "인스타 : 월 4회 (주 1회)", "스레드 : 월 4회 (주 1회)", "SEO 상단등록"],
  },
  {
    name: "FLOW CARE",
    tag: "GROWTH",
    description: "성장 관리 플랜",
    price: { original: 378000, sale: 189000, unit: "월", suffix: "~" },
    features: ["유지보수 : 월 3회", "인스타 : 월 8회 (주 2회)", "스레드 : 월 8회 (주 2회)", "블로그 : 월 2회", "네이버 키워드 세팅 할인(149,000 -> 79,000원)", "당근 키워드 광고 세팅 50% 할인(79,000원 -> 39,000원)", "문의 개선", "SEO 상단 등록"],
  },
  {
    name: "WEFLOW CARE",
    tag: "ALL-IN-ONE",
    description: "올인원 관리 플랜",
    price: { original: 678000, sale: 339000, unit: "월", suffix: "~" },
    features: ["유지보수 : 무제한", "블로그 : 월 4회 (주 1회)", "인스타 : 월 12회 (주 3회)", "스레드 : 월 12회 (주 3회)", "네이버 키워드/당근 플레이스 광고 세팅 무료", "월 성과 체크", "랜딩 개선", "광고관리", "SEO 최적화"],
  },
];

export const ADVERTISING_PLANS = [
  {
    name: "네이버 광고",
    tag: "KEYWORD",
    description: "키워드 셋팅",
    price: { original: 298000, sale: 149000, suffix: "~" },
    features: ["키워드 분석", "광고 세팅 지원", "광고 문구 제작", "문의 구조 연결", "채널 연동 지원", "성과 최적화"],
  },
  {
    name: "당근 플레이스 광고",
    tag: "LOCAL",
    description: "키워드 셋팅",
    price: { original: 158000, sale: 79000, suffix: "~" },
    features: ["지역 키워드 분석", "광고 세팅 지원", "광고 문구 제작", "지역 타겟 설정", "랜딩 연결 지원", "성과 최적화"],
  },
];

export const SERVICE_PROCESS = [
  { title: "상담 · 진단", description: "업종과 제작 목적, 현재 문의 흐름을 먼저 확인합니다.", icon: ClipboardCheck },
  { title: "기획 · 설계", description: "문의 구조와 고객 동선을 기준으로 페이지 흐름을 설계합니다.", icon: LayoutTemplate },
  { title: "디자인", description: "브랜드 톤에 맞는 화면과 CTA 배치를 구성합니다.", icon: Palette },
  { title: "개발 · 제작", description: "반응형 화면과 문의, 상담 연결 기능을 구현합니다.", icon: Code2 },
  { title: "SEO 최적화", description: "검색 노출을 위한 기본 메타, 사이트맵, 검색 등록을 준비합니다.", icon: Search },
  { title: "운영 · 사후관리", description: "광고와 운영 데이터를 보며 수정, 유지보수, 개선을 이어갑니다.", icon: Settings },
];

export const LANDING_REVIEWS = [
  { author: "OO PT 대표", content: "문의 버튼 위치를 바꾸고 상담 문의가 확실히 늘었습니다." },
  { author: "OO 필라테스 대표", content: "수정 요청을 빠르게 처리해줘서 만족합니다." },
  { author: "OO 스킨케어 대표", content: "디자인보다 문의 구조를 먼저 봐준 점이 좋았습니다." },
  { author: "OO 보험설계 대표", content: "랜딩페이지 제작 후 상담 문의가 늘었습니다." },
  { author: "OO 법률 사무소", content: "설명을 쉽게 해줘서 진행하기 편했습니다." },
  { author: "OO 세무사무소", content: "광고 연결까지 한 번에 진행돼서 편했습니다." },
  { author: "OO 부동산 대표", content: "피드백 속도가 빨라서 일정 맞추기 좋았습니다." },
  { author: "OO 카페 대표", content: "모바일 화면이 훨씬 보기 좋아졌습니다." },
];
