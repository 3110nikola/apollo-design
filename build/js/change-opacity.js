const invisibleElements = document.querySelectorAll(".opacity-0");
const invisibleElementsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
    }
  });
});
invisibleElements.forEach((element) => {
  invisibleElementsObserver.observe(element);
});
