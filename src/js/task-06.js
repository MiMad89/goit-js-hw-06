const input = document.querySelector("#validation-input");
const dataValue = document.querySelector("data-length");

input.addEventListener("blur", (event) => {
  if (input.value.length === 6) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
