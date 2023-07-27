const homeSets = ["red", "yellow", "green", "blue"],
  randomNumber = Math.floor(Math.random() * homeSets.length),
  header = document.querySelector("header"),
  main = document.querySelector("main"),
  themeImage = document.querySelector("#theme-image"),
  logo = document.querySelector("#logo");

header.classList.add(`section-${homeSets[randomNumber]}`);
main.classList.add(`section-${homeSets[randomNumber]}`);
themeImage.setAttribute("src", `img/bg-${homeSets[randomNumber]}.jpg`);

if (homeSets[randomNumber] == "yellow") {
  logo.style.filter = "invert(80%)";
}
