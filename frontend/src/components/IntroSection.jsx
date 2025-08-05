import { introduction } from "../utils/app-info.js";

const IntroSection = () => {
  return (
    <>
      <section className="block p-4 w-full max-w-[90%] h-full mx-auto">
        {/* Introduction article  */}
        <article>
          <h2 className="mt-4 py-2">Our Purpose</h2>
          <article className="my-2">
            <h3 className="text-red-500 font-medium">{introduction.heading}</h3>
            <p className="block main-para mt-4 max-w-[75%]">
              {introduction.body}
            </p>
          </article>
        </article>
      </section>
    </>
  );
};

export default IntroSection;
