function togglePassword(id) {
  let field = document.getElementById(id);

  field.type = field.type === "password" ? "text" : "password";
}

const username = document.getElementById("username");

username.addEventListener("keyup", () => {
  fetch(`php/check-user.php?username=${username.value}`)
    .then((res) => res.text())

    .then((data) => {
      document.getElementById("status").innerHTML = data;
    });
});

const confirmPassword = document.getElementById("confirmPassword");

confirmPassword.addEventListener("keyup", () => {
  let password = document.getElementById("password").value;

  if (password !== confirmPassword.value) {
    confirmPassword.classList.add("is-invalid");
  } else {
    confirmPassword.classList.remove("is-invalid");
    confirmPassword.classList.add("is-valid");
  }
});
