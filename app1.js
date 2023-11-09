const faders = document.querySelectorAll(".hidden");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = { rootMargin: "0px 0px -250px 0px" };
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
