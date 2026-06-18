export const createTimeSlots = ({ startHour = 9, count = 20, intervalMinutes = 30 } = {}) => {
  return Array.from({ length: count }, (_, index) => {
    const totalMinutes = startHour * 60 + index * intervalMinutes;
    const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
    const minutes = String(totalMinutes % 60).padStart(2, "0");

    return `${hours}:${minutes}`;
  });
};

export const getTodayValue = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
};

export const isPastTime = (date, time) => {
  if (date !== getTodayValue()) return false;

  const now = new Date();
  const [hours, minutes] = time.split(":").map(Number);
  const slotMinutes = hours * 60 + minutes;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return slotMinutes <= currentMinutes;
};
