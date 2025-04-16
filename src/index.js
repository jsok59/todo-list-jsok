import { createProject, createTodo, projectList } from "./logic.js";
import { renderSidebar } from "./renderSidebar.js";
import { renderTodo } from "./renderTodo.js";
import { toggleTodoButton } from "./toggleTodoButton.js";
import "./style.css";
import { sortTodos } from "./sortTodos.js";
import { WebStorage } from "./WebStorage.js";

//Open/close Project Dialog Button
const createProjectDialogButton = document.querySelector(".create-project");
const closeProjectButton = document.querySelector(
  '.project-dialog button[type="button"]',
);
const projectDialog = document.querySelector(".project-dialog");
createProjectDialogButton.addEventListener("click", () =>
  projectDialog.showModal(),
);
closeProjectButton.addEventListener("click", () => projectDialog.close());

//Open/close Todo Dialog Button
const createTodoDialogButton = document.querySelector(".create-todo");
const closeTodoButton = document.querySelector(
  '.todo-dialog button[type="button"]',
);
const todoDialog = document.querySelector(".todo-dialog");
createTodoDialogButton.addEventListener("click", () => todoDialog.showModal());
closeTodoButton.addEventListener("click", () => todoDialog.close());

//Form submit Project

const projectForm = document.querySelector(".project-dialog > form");
projectForm.addEventListener("submit", () => {
  projectList.addProject(
    createProject(projectForm.title.value, projectForm.desc.value, []),
  );
  renderSidebar();
  projectForm.reset();
});

//Form submit Todo
const todoForm = document.querySelector(".todo-dialog > form");
todoForm.addEventListener("submit", () => {
  projectList
    .getCurrentProject()
    .addTodo(
      createTodo(
        todoForm.title.value,
        todoForm.description.value,
        todoForm.date.value,
        todoForm.priority.value,
      ),
    );
  renderTodo();
  todoForm.reset();
});

//Save before closing
window.addEventListener("beforeunload", () => {
  WebStorage.save("projects", projectList.getProjects());
});

//Load after dom loaded
window.addEventListener("DOMContentLoaded", () => {
  projectList.loadProjects();
  renderSidebar();
});

renderSidebar();
toggleTodoButton();

window.debug = {
  createProject,
  createTodo,
  projectList,
  renderSidebar,
  sortTodos,
  WebStorage,
};
