export const init = AOS.init({
  // Global settings:
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  offset: 120,
  // delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
