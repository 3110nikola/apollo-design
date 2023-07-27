const circles = document.querySelectorAll(".circle");
const circlesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("lg:animate-[grow_0.7s]");
      entry.target.style.animationDelay = `${entries.indexOf(entry)}s`;
    }
  });
});
circlesObserver.observe(circles[0]);
circlesObserver.observe(circles[1]);
circlesObserver.observe(circles[2]);
circlesObserver.observe(circles[3]);
