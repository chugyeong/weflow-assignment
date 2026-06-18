import ProjectRequestFields from "../../../components/common/ProjectRequestFields";
import { PROJECT_TYPES } from "../../../constants/projectTypes";
import {
  CommonAgreement,
  CommonFormPanel,
  CommonSubmitButton,
} from "../../../styles/common/components";
import ReservationSchedule from "./ReservationSchedule";

const ReservationForm = ({
  form,
  minDate,
  timeSlots,
  isSubmitDisabled,
  isPastTime,
  onChange,
  onTimeSelect,
  onSubmit,
}) => {
  return (
    <CommonFormPanel onSubmit={onSubmit}>
      <ReservationSchedule
        date={form.date}
        selectedTime={form.selectedTime}
        customTime={form.customTime}
        minDate={minDate}
        timeSlots={timeSlots}
        isPastTime={isPastTime}
        onChange={onChange}
        onTimeSelect={onTimeSelect}
      />

      <ProjectRequestFields
        form={form}
        onChange={onChange}
        projectTypes={PROJECT_TYPES}
        messagePlaceholder="원하는 기능, 참고 사이트, 상담 전 전달하고 싶은 내용을 적어주세요."
      />

      <CommonAgreement>
        <input type="checkbox" name="privacy" checked={form.privacy} onChange={onChange} />
        <span>개인정보 수집 및 상담에 동의합니다.</span>
      </CommonAgreement>

      <CommonSubmitButton type="submit" disabled={isSubmitDisabled}>
        예약 신청하기
      </CommonSubmitButton>
    </CommonFormPanel>
  );
};

export default ReservationForm;
