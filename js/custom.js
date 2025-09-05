// Minimal fade-in on scroll
document.documentElement.classList.add("js");

function initFadeIn() {
  const elements = document.querySelectorAll(".fade-in");
  const prefersReducedMotion = window
    .matchMedia("(prefers-reduced-motion: reduce)")
    .matches;

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((el) => observer.observe(el));
}

if (document.readyState !== "loading") {
  initFadeIn();
} else {
  document.addEventListener("DOMContentLoaded", initFadeIn);
}
