const faders = document.querySelectorAll(".hidden");
const appearOptions = { rootMargin: "0px 0px -250px 0px" };
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      // Add a class to the observed element
      entry.target.classList.add("show");

      // Add a class to the viewport
      const viewport = document.querySelector("#viewport");
      viewport.classList.add("viewport-effect");

      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
