"use strict";

const theButton = document.querySelector(".btn");
const input = document.querySelector(".theTask");

theButton.addEventListener("click", function () {
  let tasks = document.querySelector(".thetasks");
  let createTask = document.createElement("li");
  let createButton = document.createElement("button");
  createButton.textContent = "❌";

  createTask.textContent = input.value;

  tasks.appendChild(createTask);
  tasks.appendChild(createButton);
  input.value = "";
});
