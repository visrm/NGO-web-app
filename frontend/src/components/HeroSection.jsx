import { hero } from "../utils/app-info.js";
import bg from "../assets/school.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="relative flex flex-row p-4 w-full max-w-[90%] h-full min-h-[90svh] lg:min-h-[90vh] border-b-1 border-gray-300 mx-auto">
        <article className="block w-4/5 sm:w-2/5 min-w-[320px] h-fit px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 my-auto md:ml-10 z-[50] rounded-sm border-b-4 border-red-500 shadow-sm shadow-black/50 bg-white/90 backdrop-blur-md">
          <div className="flex flex-col flex-nowrap gap-1">
            <h2>{hero.headline}</h2>
            <h4 className="mt-1">{hero.subHeadline}</h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-4 mt-2">
              <button className="cta-button">{hero.ctaButtons.primary}</button>
              <button className="cta-button">
                {hero.ctaButtons.secondary}
              </button>
            </div>
          </div>
        </article>
        <article className="absolute block min-w-[90%] md:min-w-[66%] max-w-full aspect-[4/3] md:aspect-[16/9] left-[10%] md:left-[25%] top-[10%]overflow-hidden">
          <img src={bg} alt="HERO BG IMG" loading="eager" />
        </article>
      </section>
    </>
  );
};

export default HeroSection;
