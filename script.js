"use strict";

const theButton = document.querySelector(".btn");
const input = document.querySelector(".theInput");

theButton.addEventListener("click", function () {
  if (input.value === "") {
    alert("You didn't  write a task");
  } else {
    let tasks = document.querySelector(".thetasks");
    let createTask = document.createElement("li");
    let createButton = document.createElement("button");
    let createCheckbox = document.createElement("input");

    createCheckbox.setAttribute("type", "checkbox");
    createButton.setAttribute("class", "new-btn");
    createTask.setAttribute("type", "checkbox");
    createTask.setAttribute("class", "new-task");
    createButton.textContent = "❌";

    createTask.textContent = input.value;

    tasks.appendChild(createCheckbox);
    tasks.appendChild(createTask);
    tasks.appendChild(createButton);
    input.value = "";
  }
});
