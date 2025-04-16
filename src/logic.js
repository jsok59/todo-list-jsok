import { parse } from "date-fns";
import { WebStorage } from "./WebStorage";

const projectMethods = {
  addTodo(todo) {
    this.todos.push(todo);
  },
  removeTodo(todo) {
    const index = this.todos.findIndex((element) => element.id === todo.id);
    if (index != -1) this.todos.splice(index, 1);
  },
};

const createProject = function (title, description, todos) {
  return Object.create(projectMethods, {
    title: { value: title, enumerable: true },
    description: { value: description, enumerable: true },
    todos: { value: todos, enumerable: true },
    id: { value: crypto.randomUUID(), enumerable: true },
  });
};

const createTodo = function (title, description, dueDate, priority) {
  const id = crypto.randomUUID();
  return {
    title,
    description,
    dueDate: parse(dueDate, "yyyy-MM-dd", new Date()),
    priority,
    id,
    isComplete: false,
  };
};

const projectList = (function () {
  let projects = [createProject("Example 1", "This is an example project", [])];
  let currentProject = null;
  const loadProjects = () => {
    projects = WebStorage.get("projects").map((element) => {
      return Object.assign(Object.create(projectMethods), element);
    });
  };
  const clearCurrentProject = () => (currentProject = null);
  const setCurrentProject = (id) =>
    (currentProject = projects.find((project) => project.id === id));
  const getCurrentProject = () => currentProject;
  const getProjects = () => projects;
  const addProject = (project) => projects.push(project);
  const removeProject = (project) => {
    const index = projects.findIndex((element) => element.id === project.id);
    if (index != -1) projects.splice(index, 1);
  };

  return {
    getProjects,
    addProject,
    removeProject,
    setCurrentProject,
    getCurrentProject,
    clearCurrentProject,
    loadProjects,
  };
})();

export { createProject, createTodo, projectList };
