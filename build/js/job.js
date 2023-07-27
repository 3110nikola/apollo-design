const jobApplicaion = document.forms.namedItem("job-application"),
  nextButtons = document.querySelectorAll(".next"),
  submitButton = document.querySelector("#application-submit"),
  inputFields = document.querySelectorAll(".job-field");

let pageCounter = 0;

function checkButtons() {
  inputFields.forEach((field) => {
    if (field.value.length > 0) {
      field.nextElementSibling.classList.add("bg-black");
      field.nextElementSibling.classList.remove("bg-gray-400");
    } else {
      field.nextElementSibling.classList.remove("bg-black");
      field.nextElementSibling.classList.add("bg-gray-400");
    }
  });
}

checkButtons();

inputFields.forEach((field) => {
  field.addEventListener("input", () => {
    checkButtons();
  });
});

nextButtons.forEach((next) => {
  next.addEventListener("click", (event) => {
    event.preventDefault();
    if (checkInputField(next)) {
      pageCounter++;
      jobApplicaion.style.transform = `translateX(calc(-${pageCounter}*(100% / 6)))`;
    }
  });
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (checkInputField(submitButton)) {
    applicationData = new FormData(jobApplicaion);
    request = new XMLHttpRequest();
    request.open("POST", "stash.php", true);
    request.onload = () => {
      if (request.status === 200) {
        alert("Thanks for contacting us! We will get in touch with you shortly.")
      } else {
        alert(`Unfortunately, error ${request.status} occurred when trying to send your data. Please try again later.`);
      }
    };
    request.send(applicationData);
  }
});

function checkInputField(button) {
  if (button.previousElementSibling.value || button.id == "first") {
    return true;
  } else {
    return false;
  }
}
