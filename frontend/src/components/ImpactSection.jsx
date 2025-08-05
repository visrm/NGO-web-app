import { impact } from "../utils/app-info.js";
import AnimatedCounter from "./AnimatedCounter.jsx";

const ImpactSection = () => {
  return (
    <>
      <section className="block p-4 w-full max-w-[90%] h-full mx-auto mb-4">
        <article>
          <h2 className="mt-4 py-2">Our Impact</h2>
          <article className="my-2">
            <h3 className="text-red-500 font-medium">{impact.heading}</h3>
            <p className="block main-para mt-4 max-w-[75%]">{impact.body}</p>
          </article>
        </article>
        <article className="grid grid-flow-col grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-flow-row md:grid-rows-1 md:grid-cols-3 gap-4 sm:gap-x-6 items-center w-full max-w-[90%] h-fit my-6">
          {impact.metric.map((item) => {
            return (
              <div key={item.id} className="impact-card">
                <AnimatedCounter target={item.count} visible={true} />
                <span className="text-sm font-medium text-black">{item.impact}</span>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default ImpactSection;
