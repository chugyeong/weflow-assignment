import SectionTitle from "../../components/common/SectionTitle";
import useProjectRequestForm, {
  getProjectRequestMissingMessage,
  getProjectRequestPayload,
} from "../../hooks/useProjectRequestForm";
import { useRequestStore } from "../../store/useRequestStore";
import { Inner, Section } from "../../styles/layout/layout";
import DiagnosisForm from "./components/DiagnosisForm";
import DiagnosisIntroCard from "./components/DiagnosisIntroCard";
import { toast } from "sonner";

function Diagnosis() {
  const addRequest = useRequestStore((state) => state.addRequest);
  const { form, handleChange, resetForm } = useProjectRequestForm();

  const isSubmitDisabled =
    !form.name || !form.phone || !form.projectType || !form.business || !form.privacy;

  const handleSubmit = (event) => {
    event.preventDefault();

    const missingMessage = getProjectRequestMissingMessage(form);

    if (missingMessage) {
      toast.error(missingMessage);
      return;
    }

    addRequest(getProjectRequestPayload(form, "diagnosis"));

    toast.success("무료진단 신청이 완료되었습니다.");
    resetForm();
  };

  return (
    <Section className="point2">
      <Inner>
        <SectionTitle
          title="무료진단 받기"
          desc="지금 바로 무료 진단받고, 사이트의 숨겨진 전환 가능성을 발견하세요."
          align="center"
        />

        <div className="grid grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)] items-start gap-6 max-[900px]:grid-cols-1">
          <DiagnosisIntroCard />
          <DiagnosisForm
            form={form}
            isSubmitDisabled={isSubmitDisabled}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </Inner>
    </Section>
  );
}

export default Diagnosis;
