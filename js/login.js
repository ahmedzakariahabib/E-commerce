var username = document.querySelector("#username");
var password = document.querySelector("#password");
var log_in = document.querySelector("#log_in");

var getusername = localStorage.getItem("username");
var getpassword = localStorage.getItem("password");

log_in.addEventListener("click", function (l) {
  l.preventDefault();

  if (username.value === "" || password.value === "") {
    alert("please fill data");
  } else {
    if (
      getusername &&
      getusername.trim() === username.value.trim() &&
      getpassword &&
      getpassword.trim() === password.value.trim()
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      alert("pleater enter correct data");
    }
  }
});
