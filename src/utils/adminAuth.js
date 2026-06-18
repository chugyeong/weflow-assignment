const ADMIN_AUTH_KEY = "weflow_admin_auth";
const ADMIN_PASSWORD = "weflow";

export const isAdminAuthed = () => localStorage.getItem(ADMIN_AUTH_KEY) === "true";

export const loginAdmin = (password) => {
  if (password !== ADMIN_PASSWORD) return false;

  localStorage.setItem(ADMIN_AUTH_KEY, "true");
  return true;
};

export const logoutAdmin = () => {
  localStorage.removeItem(ADMIN_AUTH_KEY);
};
