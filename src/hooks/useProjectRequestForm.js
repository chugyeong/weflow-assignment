import { useState } from "react";

export const getInitialProjectRequestForm = (overrides = {}) => ({
  name: "",
  phone: "",
  projectType: "",
  business: "",
  message: "",
  privacy: false,
  ...overrides,
});

export const getProjectRequestMissingMessage = (form, options = {}) => {
  const {
    privacyMessage = "개인정보 수집 및 상담에 동의해주세요.",
    requireSchedule = false,
    selectedReservationTime = "",
  } = options;

  if (!form.name.trim()) return "이름을 입력해주세요.";
  if (!form.phone.trim()) return "연락처를 입력해주세요.";
  if (!form.projectType) return "제작종류를 선택해주세요.";
  if (!form.business.trim()) return "업종을 입력해주세요.";
  if (requireSchedule && !form.date) return "상담 희망 날짜를 선택해주세요.";
  if (requireSchedule && !selectedReservationTime) return "상담 희망 시간을 선택해주세요.";
  if (!form.privacy) return privacyMessage;

  return "";
};

export const getProjectRequestPayload = (form, type, extraPayload = {}) => ({
  type,
  name: form.name,
  phone: form.phone,
  projectType: form.projectType,
  business: form.business,
  message: form.message,
  ...extraPayload,
});

const useProjectRequestForm = (initialOverrides) => {
  const createInitialForm = () => getInitialProjectRequestForm(initialOverrides);
  const [form, setForm] = useState(createInitialForm);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setForm(createInitialForm());
  };

  return { form, setForm, handleChange, resetForm };
};

export default useProjectRequestForm;
