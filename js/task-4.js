// 3. если форма заполнена и отправлена, собрать приколы с формы в объект где ключ это имя инпута изначение это значеия этих инпутом без побелов
// 3.1

const form = document.querySelector(".login-form");
const inputElements = [...form.querySelectorAll("input")];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isFormNotFilled = inputElements.some((input) => input.value === "");

  if (isFormNotFilled) {
    alert("All form fields must be filled in");
  } else {
    const formValues = {
      mail: form.elements["email"].value,
      passwd: form.elements["password"].value,
    };

    console.log(formValues);
    form.reset();
  }
});
