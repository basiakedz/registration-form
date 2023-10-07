document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    let valid = true;

    for (const errorEl of Array.from(
      document.getElementsByClassName("error-message")
    )) {
      errorEl.remove();
    }

    for (const invalidInputEl of Array.from(
      document.getElementsByClassName("form__error-input")
    )) {
      invalidInputEl.classList.remove("form__error-input");
    }

    const firstName = formData.get("firstName");

    if (!firstName) {
      valid = false;
      displayErrorMessage("Imię jest wymaganym polem.", "first-name-field");
    } else if (!/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(firstName)) {
      valid = false;
      displayErrorMessage(
        "Imię może zawierać tylko litery",
        "first-name-field"
      );
    }

    const lastName = formData.get("lastName");

    if (!lastName) {
      valid = false;
      displayErrorMessage("Nazwisko jest wymaganym polem.", "last-name-field");
    } else if (!/^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(lastName)) {
      valid = false;
      displayErrorMessage(
        "Nazwisko może zawierać tylko litery",
        "last-name-field"
      );
    }

    const email = formData.get("email");
    if (!email) {
      valid = false;
      displayErrorMessage("E-mail jest wymaganym polem.", "email-field");
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      valid = false;
      displayErrorMessage(
        "Sprawdź poprawność e-maila podany@przykład.pl",
        "email-field"
      );
    }

    if (valid) {
      document.getElementById("register-form").remove();

      const successTitleEl = document.createElement("h1");

      successTitleEl.classList.add("form__title");
      successTitleEl.textContent = `Witaj ${firstName} ${lastName}! Dziękujemy za Twoje zgłoszenie :)`;

      document
        .getElementById("register-form-container")
        .appendChild(successTitleEl);
    }
  });

  function displayErrorMessage(message, fieldId) {
    const errorElement = document.createElement("span");

    errorElement.classList.add("error-message");
    errorElement.textContent = message;

    const fieldEl = document.getElementById(fieldId);

    fieldEl.querySelector("input").classList.add("form__error-input");

    fieldEl.appendChild(errorElement);
  }
});
