"use strict";
let tagH2 = document.querySelector("h2:first-of-type");
tagH2.innerText = "Un titre remplacé avec VanillaJS";

let h2Query = $("h2:first");
h2Query.append(" et completé avec JQuery");

let formUsername = document.getElementById("username");
formUsername.value = "test VanillaJS";
$("#username").val("test Jquery");

let toutP = document.getElementsByTagName("p");
for (let i = 0; i < toutP.length; i++) {
  toutP[i].className = " paragraph";
}
$("p:first").addClass("summary");

let liensMore = document.querySelectorAll("a.more");

for (let i = 0; i < liensMore.length; i++) {
  liensMore[i].addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Récupéré avec VanillaJS");
  });
}
let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let username = form.elements["username"].value;
  let password = form.elements["password"].value;
  console.log(username, password);
});

$("#form").submit(function (event) {
  event.preventDefault();
  console.log($("#username").serialize(), $("#password").serialize());
});
