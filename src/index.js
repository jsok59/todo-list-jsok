import { createProject, createTodo, projectList } from "./logic.js";
import { renderSidebar } from "./renderSidebar.js";
import "./style.css";

const createProjectButton = document.querySelector('.create-project');
const projectDialog = document.querySelector('.project-dialog');
createProjectButton.addEventListener('click', () => projectDialog.showModal());


window.debug = {
    createProject,
    createTodo,
    projectList,
    renderSidebar
};