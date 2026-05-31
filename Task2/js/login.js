function togglePassword(id) {
  let field = document.getElementById(id);

  if (field.type === "password") {
    field.type = "text";
  } else {
    field.type = "password";
  }
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill all fields");
  } else {
    alert("Login Successful");
  }
});
