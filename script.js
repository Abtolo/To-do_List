"use strict";

const theButton = document.querySelector(".btn");
const input = document.querySelector(".theInput");
const removebtn = document.querySelector(".new-btn");

theButton.addEventListener("click", function () {
  if (input.value === "") {
    alert("You didn't  write a task");
  } else {
    let theDiv = document.createElement("div");
    let tasks = document.querySelector(".thetasks");
    let createTask = document.createElement("li");
    let createButton = document.createElement("button");
    let createCheckbox = document.createElement("input");

    theDiv.setAttribute("class", "taskDiv");
    createCheckbox.setAttribute("type", "checkbox");
    createButton.setAttribute("class", "new-btn");
    createButton.textContent = "❌";
    createTask.setAttribute("type", "checkbox");
    createTask.setAttribute("class", "new-task");

    createTask.textContent = input.value;

    theDiv.appendChild(createCheckbox);
    theDiv.appendChild(createTask);
    theDiv.appendChild(createButton);
    tasks.appendChild(theDiv);
    input.value = "";
  }
});

createButton.addEventListener("click", () => {
  createTask.classList.toggle("completed");
});

removebtn.addEventListener("click", function () {
  document.querySelector(".taskDiv").classList.add(".display");
});
