import { useMemo } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import useProjectRequestForm, {
  getInitialProjectRequestForm,
  getProjectRequestMissingMessage,
  getProjectRequestPayload,
} from "../../hooks/useProjectRequestForm";
import { useRequestStore } from "../../store/useRequestStore";
import { Inner, Section } from "../../styles/layout/layout";
import { createTimeSlots, getTodayValue, isPastTime } from "../../utils/date";
import ReservationForm from "./components/ReservationForm";
import ReservationSummaryCard from "./components/ReservationSummaryCard";
import { toast } from "sonner";

const getInitialForm = (date) => ({
  ...getInitialProjectRequestForm(),
  date,
  selectedTime: "",
  customTime: "",
});

function Reservation() {
  const addRequest = useRequestStore((state) => state.addRequest);
  const timeSlots = useMemo(() => createTimeSlots(), []);
  const today = getTodayValue();
  const { form, setForm, resetForm } = useProjectRequestForm(getInitialForm(today));

  const selectedReservationTime = form.customTime.trim() || form.selectedTime;
  const isSubmitDisabled =
    !form.name ||
    !form.phone ||
    !form.projectType ||
    !form.business ||
    !form.date ||
    !selectedReservationTime ||
    !form.privacy;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prev) => {
      const nextForm = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "date" && prev.selectedTime && isPastTime(value, prev.selectedTime)) {
        nextForm.selectedTime = "";
      }

      return nextForm;
    });
  };

  const handleTimeSelect = (time) => {
    if (isPastTime(form.date, time)) return;

    setForm((prev) => ({
      ...prev,
      selectedTime: time,
      customTime: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const missingMessage = getProjectRequestMissingMessage(form, {
      requireSchedule: true,
      selectedReservationTime,
    });

    if (missingMessage) {
      toast.error(missingMessage);
      return;
    }

    addRequest(
      getProjectRequestPayload(form, "reservation", {
        date: form.date,
        time: selectedReservationTime,
      }),
    );

    toast.success("예약 신청이 완료되었습니다.");
    resetForm();
  };

  return (
    <Section className="point3">
      <Inner>
        <SectionTitle
          title="상담 예약"
          desc="원하시는 일정과 제작 정보를 남겨주시면 WEFLOW가 빠르게 상담을 안내드립니다."
          align="center"
        />

        <div className="grid grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)] items-start gap-6 max-[900px]:grid-cols-1">
          <ReservationSummaryCard />
          <ReservationForm
            form={form}
            minDate={today}
            timeSlots={timeSlots}
            isSubmitDisabled={isSubmitDisabled}
            isPastTime={isPastTime}
            onChange={handleChange}
            onTimeSelect={handleTimeSelect}
            onSubmit={handleSubmit}
          />
        </div>
      </Inner>
    </Section>
  );
}

export default Reservation;
