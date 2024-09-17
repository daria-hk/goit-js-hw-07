const submitForm = document.querySelector("form.login-form");

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const formData = {
    email: formElements.email.value.trim(),
    password: formElements.password.value.trim(),
  };

  if (formData.email.length === 0 || formData.password.length === 0) {
    alert("All form fields must be filled in");
  } else {
    console.log(formData);
    event.target.reset();
  }
});
