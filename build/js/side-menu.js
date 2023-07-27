const toggle = document.querySelector("#toggle"),
  sideNav = document.querySelector("#side-nav");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("bg-toggle-default");
  toggle.classList.toggle("bg-toggle-close");
  sideNav.classList.toggle("translate-x-full");
});
