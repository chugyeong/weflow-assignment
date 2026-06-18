import { create } from "zustand";
import { CASE_ITEMS } from "../constants/cases";

const STORAGE_KEY = "weflow_cases";

const getDefaultCase = (item) => CASE_ITEMS.find((caseItem) => caseItem.slug === item.slug) || {};

const normalizeCase = (item, index = 0) => {
  const defaultCase = getDefaultCase(item);

  return {
    ...defaultCase,
    ...item,
    id: item.id || item.slug || defaultCase.slug || `case-${index}`,
    title: item.title || defaultCase.title || "",
    slug: item.slug || defaultCase.slug || `case-${index}`,
    image: item.image || defaultCase.image || "",
    category: item.category || defaultCase.category || item.title || "",
    summary:
      item.summary ||
      defaultCase.summary ||
      `${item.title} 업종의 문의 전환과 신뢰도를 높이기 위해 모바일 중심 랜딩 구조를 설계했습니다.`,
    description:
      item.description ||
      defaultCase.description ||
      "방문자가 서비스 강점과 상담 흐름을 빠르게 이해하도록 첫 화면, 혜택, 상담 버튼의 우선순위를 재정리했습니다.",
    result: item.result || defaultCase.result || "문의 흐름 개선",
    metrics: item.metrics || defaultCase.metrics || ["모바일 중심 구성", "상담 CTA 강화", "업종 맞춤 섹션"],
    kpis: item.kpis || defaultCase.kpis || [],
    detailCards: item.detailCards || defaultCase.detailCards || [],
    projectScope: item.projectScope || defaultCase.projectScope || [],
    clientType: item.clientType || defaultCase.clientType || "",
    launchPeriod: item.launchPeriod || defaultCase.launchPeriod || "",
    channel: item.channel || defaultCase.channel || "",
    timeline: item.timeline || defaultCase.timeline || [],
    testimonial: item.testimonial || defaultCase.testimonial || "",
    visible: item.visible !== false,
  };
};

const getInitialCases = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved).map(normalizeCase);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }

  return CASE_ITEMS.map(normalizeCase);
};

const saveCases = (cases) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
};

export const useCaseStore = create((set) => ({
  cases: getInitialCases(),

  updateCase: (id, payload) =>
    set((state) => {
      const nextCases = state.cases.map((item) =>
        item.id === id ? normalizeCase({ ...item, ...payload }) : item,
      );
      saveCases(nextCases);
      return { cases: nextCases };
    }),

  toggleCaseVisibility: (id) =>
    set((state) => {
      const nextCases = state.cases.map((item) =>
        item.id === id ? { ...item, visible: !item.visible } : item,
      );
      saveCases(nextCases);
      return { cases: nextCases };
    }),

  resetCases: () =>
    set(() => {
      const nextCases = CASE_ITEMS.map(normalizeCase);
      saveCases(nextCases);
      return { cases: nextCases };
    }),
}));
