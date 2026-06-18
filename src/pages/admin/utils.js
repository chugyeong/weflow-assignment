export const requestStatuses = ["대기", "진행중", "완료"];
export const statusFilters = ["전체", ...requestStatuses];

export const normalizeStatus = (status) => {
  if (status === "진행중" || status === "완료") return status;
  return "대기";
};

export const formatDateTime = (value) => {
  if (!value) return "-";

  return new Date(value).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getRequestTypeLabel = (type) => {
  if (type === "reservation") return "예약";
  return "문의";
};

export const getReservationSchedule = (item) => {
  const schedule = `${item.date || ""} ${item.time || ""}`.trim();
  return schedule || "-";
};

export const getStatusCounts = (requests = []) => {
  return requestStatuses.reduce(
    (counts, status) => ({
      ...counts,
      [status]: requests.filter((item) => normalizeStatus(item.status) === status).length,
    }),
    {},
  );
};

export const filterByType = (requests = [], type) => requests.filter((item) => item.type === type);
