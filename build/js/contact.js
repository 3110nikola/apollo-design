const form = document.forms.namedItem("contact");

form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    (formData = new FormData(form)), (request = new XMLHttpRequest());
    request.open("POST", "stash.php", true);
    request.onload = (progress) => {
      form.innerHTML =
        request.status === 200
          ? "Thanks for contacting us! We will get in touch with you shortly."
          : `Unfortunately, error ${request.status} occurred when trying to send your data. Please try again later.`;
    };
    request.send(formData);
  },
  false
);
