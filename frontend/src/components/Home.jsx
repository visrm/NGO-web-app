import HeroSection from "./HeroSection";
import ImpactSection from "./ImpactSection";
import InitiativeSection from "./InitiativeSection";
import IntroSection from "./IntroSection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col flex-norap max-w-full w-full min-h-screen gap-1 sm:gap-4 md:gap-8">
        <HeroSection />
        <IntroSection />
        <InitiativeSection />
        <ImpactSection />
      </div>
    </>
  );
};

export default Home;
