
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
                                          todos: {value:todos}})

};

const createTodo = function (title, description, dueDate, priority) {
    const id = crypto.randomUUID();
    return {title, description, dueDate, priority, id}
};


const projectList = (function() {
    const projects = [];

    const getProjects = () => projects;

    const addProject = (project) => projects.push(project);

    const removeProject = (project) => {
        const index = projects.findIndex((element) => element.id === project.id);
        if (index != -1)
            projects.splice(index, 1);
    }

    return {getProjects, addProject, removeProject}
})();




window.debug = {
    createProject,
    createTodo,
    projects,
    projectList
  };