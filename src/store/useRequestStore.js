import { create } from "zustand";

const STORAGE_KEY = "weflow_requests";

const getInitialRequests = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

const saveRequests = (requests) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
};

export const useRequestStore = create((set) => ({
  requests: getInitialRequests(),

  addRequest: (request) =>
    set((state) => {
      const newRequests = [
        {
          id: crypto.randomUUID(),
          status: "대기",
          createdAt: new Date().toISOString(),
          ...request,
        },
        ...state.requests,
      ];

      saveRequests(newRequests);

      return { requests: newRequests };
    }),

  updateStatus: (id, status) =>
    set((state) => {
      const newRequests = state.requests.map((item) =>
        item.id === id ? { ...item, status } : item,
      );

      saveRequests(newRequests);

      return { requests: newRequests };
    }),

  deleteRequest: (id) =>
    set((state) => {
      const newRequests = state.requests.filter((item) => item.id !== id);

      saveRequests(newRequests);

      return { requests: newRequests };
    }),
}));
