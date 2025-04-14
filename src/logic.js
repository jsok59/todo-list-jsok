import { parse } from "date-fns";


const projectMethods = {
    addTodo(todo) {
        this.todos.push(todo);
    },
    removeTodo(todo) {
        const index = this.todos.findIndex((element) => element.id === todo.id);
        if (index != -1)
            this.todos.splice(index, 1);
    }
};

const createProject = function(title, description, todos) {

    return Object.create(projectMethods, {title :{value: title}, 
                                          description: {value:description}, 
                                          todos: {value:todos},
                                          id: {value: crypto.randomUUID()}})

};

const createTodo = function (title, description, dueDate, priority) {
    const id = crypto.randomUUID();
    return {title, description, dueDate: parse(dueDate, 'yyyy-MM-dd', new Date()), priority, id}
};


const projectList = (function() {
    const projects = [createProject('Example 1', 'This is an example project', [])];
    let currentProject = null;
    const clearCurrentProject = () => currentProject = null;
    const setCurrentProject = (id) => currentProject = projects.find(project => project.id===id);
    const getCurrentProject = () => currentProject;
    const getProjects = () => projects;
    const addProject = (project) => projects.push(project);
    const removeProject = (project) => {
        const index = projects.findIndex((element) => element.id === project.id);
        if (index != -1)
            projects.splice(index, 1);
    }

    return {getProjects, addProject, removeProject, setCurrentProject, getCurrentProject, clearCurrentProject}
})();




export {createProject, createTodo, projectList}

