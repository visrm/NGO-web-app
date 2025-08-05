import { initiative, callToAction } from "../utils/app-info.js";
const InitiativeSection = () => {
  return (
    <>
      <section className="block p-4 w-full max-w-[90%] h-full mx-auto mb-4 border-b-1 border-gray-300">
        <article>
          <h2 className="mt-4 py-2">Our Initiatives</h2>
          <article className="my-2">
            <h3 className="text-red-500 font-medium">{initiative.heading}</h3>
            <p className="block main-para mt-4 max-w-[75%]">{initiative.body}</p>
          </article>
        </article>
        <article className="flex flex-col sm:flex-row w-full max-w-[90%] gap-4 md:gap-6 my-4 sm:my-8 md:my-10">
          {initiative.initiatives.map((item) => {
            return (
              <div
                className="shadow-sm shadow-black/25 bg-[#fff] rounded-md p-6 place-content-center"
                key={item.id}
              >
                <h3 className="">{item.title}</h3>
                <h4 className="mt-4 pb-4">{item.description}</h4>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default InitiativeSection;
