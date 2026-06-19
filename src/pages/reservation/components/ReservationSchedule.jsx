import { Field, FieldLabel, FieldInput } from "../../../styles/common/components";

const getTimeButtonClassName = (selected) =>
  [
    "min-h-[42px] rounded-[10px] border font-bold transition hover:enabled:-translate-y-0.5 hover:enabled:border-we-blue-300 hover:enabled:text-we-white disabled:cursor-not-allowed disabled:bg-we-gray-900/45 disabled:text-we-gray-700 disabled:line-through",
    selected
      ? "border-we-blue-300 bg-we-blue-500 text-we-blue-100"
      : "border-we-gray-700 bg-we-black text-we-gray-300 hover:enabled:border-we-blue-300",
  ].join(" ");

const ReservationSchedule = ({
  date,
  selectedTime,
  customTime,
  minDate,
  timeSlots,
  isPastTime,
  onChange,
  onTimeSelect,
}) => {
  return (
    <>
      <Field>
        <FieldLabel>예약 날짜</FieldLabel>
        <FieldInput
          type="date"
          name="date"
          min={minDate}
          value={date}
          onChange={onChange}
          className="cursor-pointer [&&::-webkit-calendar-picker-indicator]:invert [&&::-webkit-calendar-picker-indicator]:cursor-pointer"
        />
      </Field>

      <Field>
        <FieldLabel>상담 시간</FieldLabel>
        <div className="grid grid-cols-5 gap-2.5 max-[640px]:grid-cols-3 max-[420px]:grid-cols-2">
          {timeSlots.map((time) => {
            const disabled = isPastTime(date, time);
            const selected = selectedTime === time;

            return (
              <button
                key={time}
                type="button"
                className={getTimeButtonClassName(selected)}
                disabled={disabled}
                onClick={() => onTimeSelect(time)}>
                {time}
              </button>
            );
          })}
        </div>
        <p className="mt-2.5 text-[clamp(12px,1.2vw,14px)] text-we-gray-500">
          9시부터 18시 30분까지 30분 간격으로 선택할 수 있습니다.
        </p>
      </Field>

      <Field>
        <FieldLabel>원하시는 시간대</FieldLabel>
        <input
          name="customTime"
          value={customTime}
          onChange={onChange}
          placeholder="예: 평일 오후 2시 이후, 이번 주 금요일 오전"
        />
      </Field>
    </>
  );
};

export default ReservationSchedule;
