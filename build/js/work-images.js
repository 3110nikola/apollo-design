const imagesFromLeft = document.querySelectorAll(".work-image-left");
const workImagesLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.right = "calc(50% + 80px)";
    }
  });
});
imagesFromLeft.forEach((image) => {
  workImagesLeftObserver.observe(image);
});

const imagesFromRight = document.querySelectorAll(".work-image-right");
const workImagesRightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.left = "calc(50% + 80px)";
    }
  });
});
imagesFromRight.forEach((image) => {
  workImagesRightObserver.observe(image);
});
