"use strict";

const theButton = document.querySelector(".btn");
const input = document.querySelector(".theInput");
const removebtn = document.querySelector(".new-btn");

theButton.addEventListener("click", function () {
  if (input.value === "") {
    alert("You didn't  write a task");
  } else {
    let tasks = document.querySelector(".thetasks");
    let theDiv = document.createElement("div"); // the box in which the new task appears
    let createTask = document.createElement("li"); // the task thats created (in list format)
    let createButton = document.createElement("button"); // button that will remove the task
    let createCheckbox = document.createElement("input"); // the checkbox

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

  // Add event listener to checkbox to toggle task completion
  createCheckbox.addEventListener("change", function () {
    if (createCheckbox.checked) {
      createTask.classList.add(".completed"); // Add completed class
    } else {
      createTask.classList.remove(".completed"); // Remove completed class
    }
  });

  // Add event listener to the remove button
  createButton.addEventListener("click", function () {
    tasks.removeChild(theDiv);
  });
});
