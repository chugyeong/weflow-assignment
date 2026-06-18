import * as XLSX from "xlsx";

export const exportExcel = (data, fileName) => {
  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, fileName);

  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

export const formatRequestForExcel = (item) => ({
  구분: item.type === "reservation" ? "예약" : "문의",
  상태: item.status,
  이름: item.name,
  연락처: item.phone,
  접수일: item.createdAt ? new Date(item.createdAt).toLocaleString("ko-KR") : "",
  "희망 일정": item.type === "reservation" ? `${item.date || ""} ${item.time || ""}`.trim() : "",
  "제작 종류": item.projectType,
  업종: item.business,
  추가요청사항: item.message,
});

export const exportRequestsExcel = (requests, fileName) => {
  exportExcel(requests.map(formatRequestForExcel), fileName);
};
