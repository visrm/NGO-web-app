import { useEffect } from "react";

const AnimatedCounter = ({ target, suffix = "+" }) => {
  // Animate numbers when they come into view
  function animateNumbers() {
    const counters = document.querySelectorAll(".impact-number");
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.textContent.replace(/\D/g, ""));
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, 50);
          observer.unobserve(counter);
        }
      });
    }, options);

    counters.forEach((counter) => observer.observe(counter));
  }

  // Initialize animations when page loads
  useEffect(() => {
    animateNumbers();
  }, [target]);

  return (
    <>
      <span className="block py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-sans">
        <span className="impact-number">{target}</span>
        {suffix}
      </span>
    </>
  );
};

export default AnimatedCounter;
