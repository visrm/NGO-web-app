import { aboutUs } from "../utils/app-info.js";
import about_head from "../assets/about-section-head.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="block p-4 w-full max-w-[90%] h-full mx-auto">
        <article className="relative flex place-content-center w-full max-w-full h-full min-h-60">
          <img
            src={about_head}
            alt="ABOUT SECTION HEAD IMG"
            className="absolute block w-full h-full object-cover aspect-[16/9] -z-10 bg-black/10 transition-all duration-300"
            loading="eager"
          />
          <span className="block my-auto z-[10] text-6xl sm:text-7xl text-[#fdfdfd] font-neutron font-bold uppercase">
            About Us
          </span>
        </article>
        {aboutUs.map((item) => {
          return (
            <article key={item.id} className="block my-4 md:my-6 p-4">
              <div>
                <h2>{item.headline}</h2>
                <p className="mt-4 main-para w-full max-w-[90%]">{item.body}</p>
              </div>
              <div className="bg-gray-50">
                <img
                  src={item.img}
                  alt={`About Image ${item.id}`}
                  className="block mt-4 sm:mt-8 mx-auto w-full max-w-[80%] h-auto aspect-[16/9] rounded-sm"
                  loading="lazy"
                />
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default AboutUs;
