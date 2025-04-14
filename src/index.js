import { createProject, createTodo, projectList } from "./logic.js";
import { renderSidebar } from "./renderSidebar.js";
import "./style.css";

renderSidebar();

//Open/close Project Dialog Button
const createProjectDialogButton = document.querySelector('.create-project');
const closeProjectButton = document.querySelector('.project-dialog button[type="button"]');
const projectDialog = document.querySelector('.project-dialog');
createProjectDialogButton.addEventListener('click', () => projectDialog.showModal());
closeProjectButton.addEventListener('click', () => projectDialog.close())


//Open/close Todo Dialog Button
const createTodoDialogButton = document.querySelector('.create-todo');
const closeTodoButton = document.querySelector('.todo-dialog button[type="button"]');
const todoDialog = document.querySelector('.todo-dialog');
createTodoDialogButton.addEventListener('click', () => todoDialog.showModal());
closeTodoButton.addEventListener('click', () => todoDialog.close())

//Form submit Project

const projectForm = document.querySelector(".project-dialog > form");
projectForm.addEventListener('submit', () => {
    projectList.addProject(createProject(projectForm.title.value, projectForm.desc.value,[]));
    renderSidebar();
})



window.debug = {
    createProject,
    createTodo,
    projectList,
    renderSidebar
};