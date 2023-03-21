const loginEl = document.querySelector(".login-form");

loginEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Proszę uzupełnić wszystkie pola!");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
  }
  event.currentTarget.reset();
});
