import {
  BadgeDollarSign,
  ClipboardCheck,
  Clock3,
  Headset,
  Lightbulb,
  Megaphone,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const HERO_CARDS = [
  {
    title: "올인원 케어",
    description: "제작 · 광고 · 운영",
    icon: Rocket,
  },
  {
    title: "빠른 제작",
    description: "3일 ~ 7일",
    icon: Clock3,
  },
  {
    title: "합리적 비용",
    description: "가성비 + 품질",
    icon: BadgeDollarSign,
  },
];

export const CARE_PLAN_BENEFITS = [
  {
    title: "WEFLOW 케어 플랜",
    description: "제작 이후 운영까지 연결",
    icon: ShieldCheck,
  },
  {
    title: "제작+운영+광고+관리",
    description: "필요한 작업을 한 번에",
    icon: Workflow,
  },
  {
    title: "빠른 제작",
    description: "3~7일 빠른 배포",
    icon: Rocket,
  },
  {
    title: "합리적인 비용",
    description: "필요한 기능 중심 구성",
    icon: BadgeDollarSign,
  },
  {
    title: "24시간 상담 대기",
    description: "빠른 상담과 피드백",
    icon: Headset,
  },
  {
    title: "운영·광고 지원",
    description: "사후관리 서비스",
    icon: Megaphone,
  },
];

export const PROCESS_STEPS = ["고객 상담", "접수 및 제작", "3~7일 배포 완료", "광고 및 운영 관리"];

export const PRODUCTION_PROCESS = [
  {
    title: "제작 진행 과정",
    items: ["고객 상담", "기획 및 제작", "3~7일 완료", "광고 및 운영"],
  },
  {
    title: "6단계 제작 프로세스",
    items: ["상담 · 진단", "기획 · 설계", "디자인", "개발 · 제작", "SEO 최적화", "광고운영 · 사후관리"],
  },
];

export const SUCCESS_CASES = [
  { title: "PT 스튜디오", key: "cases_pt" },
  { title: "필라테스", key: "cases_pilates" },
  { title: "보험 설계", key: "cases_insurance" },
  { title: "차량 렌탈", key: "cases_car-rental" },
  { title: "법률 사무소", key: "cases_law-firm" },
];

export const DIAGNOSIS_STEP = [
  {
    title: "문의 구조 진단",
    icon: ClipboardCheck,
  },
  {
    title: "디자인 평가",
    icon: Palette,
  },
  {
    title: "검색 노출 분석",
    icon: Search,
  },
  {
    title: "문의 개선 제안",
    icon: Lightbulb,
  },
];

export const REVIEWS = [
  {
    rating: 5,
    author: "OO PT 대표",
    content: "문의 버튼 위치를 바꾸고 상담 문의가 확실히 늘었습니다.",
  },
  {
    rating: 5,
    author: "OO 필라테스 대표",
    content: "수정 요청을 빠르게 처리해줘서 진행이 편했습니다.",
  },
  {
    rating: 5,
    author: "OO 스킨케어 대표",
    content: "디자인보다 문의 구조를 먼저 봐준 점이 특히 좋았습니다.",
  },
  {
    rating: 5,
    author: "OO 법률 사무소",
    content: "랜딩페이지 제작 후 상담 문의가 꾸준히 들어오고 있습니다.",
  },
  {
    rating: 5,
    author: "OO 세무사무소",
    content: "설명을 쉽게 해줘서 의사결정이 빨랐습니다.",
  },
  {
    rating: 5,
    author: "OO 부동산 대표",
    content: "광고 연결까지 한 번에 진행돼서 관리가 편했습니다.",
  },
  {
    rating: 5,
    author: "OO 카페 대표",
    content: "피드백 속도가 빨라서 오픈 일정에 맞출 수 있었습니다.",
  },
  {
    rating: 5,
    author: "OO 미용실 대표",
    content: "모바일 화면이 훨씬 보기 좋아졌습니다.",
  },
  {
    rating: 5,
    author: "OO 네일샵 대표",
    content: "가격표와 예약 버튼을 정리하니 신규 고객 문의가 늘었습니다.",
  },
  {
    rating: 5,
    author: "OO 영어학원 원장",
    content: "학부모가 커리큘럼을 쉽게 이해해서 상담 전환이 좋아졌습니다.",
  },
  {
    rating: 5,
    author: "OO 인테리어 대표",
    content: "시공 사례를 보기 좋게 정리해 견적 문의 응대가 쉬워졌습니다.",
  },
  {
    rating: 5,
    author: "OO 이사업체 대표",
    content: "견적 문의 양식이 명확해져 상담 시간이 줄었습니다.",
  },
  {
    rating: 5,
    author: "OO 차량 렌탈 대표",
    content: "차종별 문의 흐름을 나눠 고객 응대가 훨씬 편해졌습니다.",
  },
  {
    rating: 5,
    author: "OO 키즈카페 대표",
    content: "단체 예약 문의가 한눈에 정리돼 운영에 도움이 됐습니다.",
  },
  {
    rating: 5,
    author: "OO 청소업체 대표",
    content: "서비스 범위와 견적 문의가 명확해져 불필요한 통화가 줄었습니다.",
  },
  {
    rating: 5,
    author: "OO 반려동물 미용 대표",
    content: "예약 전 안내사항을 페이지에 넣어 노쇼와 착오가 줄었습니다.",
  },
];
