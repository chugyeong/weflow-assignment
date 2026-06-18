import ProjectRequestFields from "../../../components/common/ProjectRequestFields";
import { PROJECT_TYPES } from "../../../constants/projectTypes";
import {
  CommonAgreement,
  CommonFormPanel,
  CommonSubmitButton,
} from "../../../styles/common/components";

const LandingInquiryForm = ({ formRef, form, isSubmitDisabled, onChange, onSubmit }) => {
  return (
    <aside
      ref={formRef}
      className="sticky top-[100px] max-h-[calc(100vh_-_48px)] overflow-y-auto [scrollbar-width:thin] max-[1400px]:static max-[1400px]:max-h-none [&_form]:border-t-2 [&_form]:border-t-we-blue-300">
      <CommonFormPanel onSubmit={onSubmit}>
        <div className="mb-6">
          <strong className="mb-2 block text-2xl text-we-white">무료진단 받기</strong>
          <p className="leading-[1.7] text-we-gray-500">
            기본 정보를 남겨주시면 문의 관리에 접수하고 빠르게 상담을 안내드립니다.
          </p>
        </div>
        <ProjectRequestFields
          form={form}
          onChange={onChange}
          projectTypes={PROJECT_TYPES}
          messagePlaceholder="현재 고민, 원하는 기능, 참고 사이트를 자유롭게 적어주세요."
        />
        <CommonAgreement>
          <input type="checkbox" name="privacy" checked={form.privacy} onChange={onChange} />
          <span>개인정보 수집 및 이용에 동의합니다.</span>
        </CommonAgreement>
        <CommonSubmitButton type="submit" disabled={isSubmitDisabled}>
          무료진단 및 견적받기
        </CommonSubmitButton>
      </CommonFormPanel>
    </aside>
  );
};

export default LandingInquiryForm;
