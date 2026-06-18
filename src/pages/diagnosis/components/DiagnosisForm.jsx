import ProjectRequestFields from "../../../components/common/ProjectRequestFields";
import { PROJECT_TYPES } from "../../../constants/projectTypes";
import {
  CommonAgreement,
  CommonFormPanel,
  CommonSubmitButton,
} from "../../../styles/common/components";

const DiagnosisForm = ({ form, isSubmitDisabled, onChange, onSubmit }) => {
  return (
    <CommonFormPanel onSubmit={onSubmit}>
      <div className="mb-6">
        <strong className="mb-2 block text-[clamp(22px,2.4vw,28px)] text-we-white">
          무료진단 및 견적받기
        </strong>
        <p className="leading-[1.7] text-we-gray-500">
          기본 정보를 남겨주시면 업종과 목적에 맞춰 제작 방향을 먼저 진단해드립니다.
        </p>
      </div>

      <ProjectRequestFields
        form={form}
        onChange={onChange}
        projectTypes={PROJECT_TYPES}
        messagePlaceholder="현재 고민, 참고 사이트, 개선하고 싶은 내용을 자유롭게 적어주세요."
      />

      <CommonAgreement>
        <input type="checkbox" name="privacy" checked={form.privacy} onChange={onChange} />
        <span>개인정보 수집 및 상담에 동의합니다.</span>
      </CommonAgreement>

      <CommonSubmitButton type="submit" disabled={isSubmitDisabled}>
        무료진단 및 견적 받기
      </CommonSubmitButton>
    </CommonFormPanel>
  );
};

export default DiagnosisForm;
