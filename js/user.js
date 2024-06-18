let navbar1 = document.querySelector("#navbar1");
let navbar2 = document.querySelector("#navbar2");
let navbar10 = document.querySelector("#navbar10");

if (localStorage.getItem("username")) {
  navbar1.remove();
  navbar2.innerHTML = "WELCOME " + localStorage.getItem("username");
} else {
  navbar10.remove();
}

let legout = document.querySelector(".navbar8");
legout.addEventListener("click", function () {
  localStorage.clear();
  window.location = "register.html";
});