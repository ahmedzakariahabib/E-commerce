let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let sign_Up = document.querySelector("#sign_Up");

sign_Up.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || password.value === "" || email.value === "") {
    alert("please fill data");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("email", email.value);

    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  }
});

 