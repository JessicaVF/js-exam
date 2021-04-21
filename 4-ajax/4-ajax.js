"use strict";
fetch("https://fakerapi.it/api/v1/images?_quantity=1")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    $("#title").append(data.data[0].title);
    $("#desc").append(data.data[0].description);
    $("#image").attr("src", data.data[0].url);
  })
  .catch(function (error) {
    console.log("error 1");
  });

fetch("https://fakerapi.it/api/v1/images?_quantity=10")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let dataLength = data.data.length;

    for (let i = 0; i < dataLength; i++) {
      $("#content-multiple").append(`<h1>${data.data[i].title}</h1>`);
      $("#content-multiple").append(`<img src = ${data.data[i].url}>`);
      $("#content-multiple").append(`<p>${data.data[i].description}</p>`);
    }
  })
  .catch(function (error) {
    console.log("error 1");
  });
