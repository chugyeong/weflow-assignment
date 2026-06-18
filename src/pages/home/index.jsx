import HeroSection from "./components/Hero";
import CarePlan from "./components/CarePlan";
import SuccessCase from "./components/SuccessCase";
import Process from "./components/Process";
import Diagnosis from "./components/Diagnosis";
import Review from "./components/Review";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CarePlan />
      <SuccessCase />
      <Process />
      <Diagnosis />
      <Review />
    </>
  );
};

export default Home;
