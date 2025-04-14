import { projectList } from "./logic"

function renderTodo() {
    const container = document.querySelector(".content");
    if (projectList.getCurrentProject()){
        const todos = projectList.getCurrentProject().todos;
    }
    for (const todo of todos) {

        const div = document.createElement('div');
        div.className = "todo";
        const h4 = document.createElement('h4');
        h4.textContent = todo.title 
        const p = document.createElement('p');
        p.textContent = todo.description;


        div.appendChild(h4);
        div.appendChild(p);
        container.appendChild(div);
        
    }


}

export {renderTodo}