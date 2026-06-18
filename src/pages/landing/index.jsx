import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRequestStore } from "../../store/useRequestStore";
import useProjectRequestForm, {
  getProjectRequestMissingMessage,
  getProjectRequestPayload,
} from "../../hooks/useProjectRequestForm";
import LandingBenefits from "./components/LandingBenefits";
import LandingDiagnosisPreview from "./components/LandingDiagnosisPreview";
import LandingHero from "./components/LandingHero";
import LandingInquiryForm from "./components/LandingInquiryForm";
import LandingPlans from "./components/LandingPlans";
import LandingProcess from "./components/LandingProcess";
import LandingReviews from "./components/LandingReviews";
import LandingStory from "./components/LandingStory";
import { toast } from "sonner";

const Landing = () => {
  const navigate = useNavigate();
  const addRequest = useRequestStore((state) => state.addRequest);
  const formRef = useRef(null);
  const { form, handleChange, resetForm } = useProjectRequestForm();

  const isSubmitDisabled =
    !form.name || !form.phone || !form.projectType || !form.business || !form.privacy;

  const handleSubmit = (event) => {
    event.preventDefault();

    const missingMessage = getProjectRequestMissingMessage(form, {
      privacyMessage: "개인정보 수집 및 이용에 동의해주세요.",
    });

    if (missingMessage) {
      toast.error(missingMessage);
      return;
    }

    addRequest(getProjectRequestPayload(form, "diagnosis"));

    toast.success("무료진단 신청이 완료되었습니다.");
    resetForm();
  };

  return (
    <section className="w-full bg-[radial-gradient(100px_circle_at_50%_-35%,#07312e_0%,transparent_500%),radial-gradient(100px_circle_at_105%_50%,#0a2b4b_0%,transparent_400%),#0b1122] px-5 py-24 max-md:px-4 max-md:py-16">
      <div className="mx-auto w-full max-w-[1680px]">
        <div className="grid grid-cols-[minmax(0,1fr)_420px] items-start gap-8 max-[1400px]:grid-cols-1">
          <div className="min-w-0">
            <LandingHero />
            <LandingBenefits />
            <LandingStory />
            <LandingPlans />
            <LandingProcess />
            <LandingDiagnosisPreview onEstimateClick={() => navigate("/diagnosis")} />
            <LandingReviews />
          </div>

          <LandingInquiryForm
            formRef={formRef}
            form={form}
            isSubmitDisabled={isSubmitDisabled}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
