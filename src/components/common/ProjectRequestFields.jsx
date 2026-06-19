import { Form } from "../../styles/common/components";
import { NameField, PhoneField, SelectField, TextAreaField, TextField } from "./FormControls";

const ProjectRequestFields = ({
  form,
  onChange,
  projectTypes,
  nameLabel = "이름",
  namePlaceholder = "이름을 입력해주세요",
  phoneLabel = "연락처",
  phonePlaceholder = "010-0000-0000",
  projectTypeLabel = "제작종류",
  projectTypePlaceholder = "제작종류를 선택해주세요",
  businessLabel = "업종",
  businessPlaceholder = "예: 필라테스, 학원, 병원",
  messageLabel = "추가 요청사항",
  messagePlaceholder = "원하는 기능, 참고 사이트, 상담 전 전달하고 싶은 내용을 적어주세요.",
}) => {
  return (
    <>
      <Form>
        <NameField
          label={nameLabel}
          value={form.name}
          onChange={onChange}
          placeholder={namePlaceholder}
        />

        <PhoneField
          label={phoneLabel}
          value={form.phone}
          onChange={onChange}
          placeholder={phonePlaceholder}
        />
      </Form>

      <Form>
        <SelectField
          label={projectTypeLabel}
          name="projectType"
          value={form.projectType}
          onChange={onChange}
          placeholder={projectTypePlaceholder}
          options={projectTypes}
        />

        <TextField
          label={businessLabel}
          name="business"
          value={form.business}
          onChange={onChange}
          placeholder={businessPlaceholder}
          maxLength={40}
        />
      </Form>

      <TextAreaField
        label={messageLabel}
        name="message"
        value={form.message}
        onChange={onChange}
        placeholder={messagePlaceholder}
        maxLength={500}
      />
    </>
  );
};

export default ProjectRequestFields;
