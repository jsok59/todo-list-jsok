import { projectList } from "./logic"
import { clearChildDoms } from "./clearChildDoms";
import closeImg from "./images/close.svg";
import {format} from "date-fns";
import { sortTodos } from "./sortTodos";

function renderTodo() {
    const container = document.querySelector(".content");
    clearChildDoms(container);
    sortTodos();
    const todos = projectList.getCurrentProject().todos;
    for (const todo of todos) {

        const div = document.createElement('div');
        div.className = "todo";
        const h4 = document.createElement('h4');
        h4.textContent = todo.title 
        const pDesc = document.createElement('p');
        pDesc.textContent = todo.description;
        const pDate = document.createElement('p')
        pDate.textContent = `Date: ${format(todo.dueDate,"MM/dd/yyyy")}`;
        const pPrio = document.createElement('p')
        pPrio.textContent = `Priority: ${todo.priority}`;
        const todoCheckBox = document.createElement('input');
        todoCheckBox.type = "checkbox";
        todoCheckBox.name = "isComplete";
        const img = document.createElement('img');
        img.src = closeImg;


        div.appendChild(todoCheckBox);
        div.appendChild(h4);
        div.appendChild(pDesc);
        div.appendChild(pDate);
        div.appendChild(pPrio);
        div.appendChild(img);
        container.appendChild(div);
        
    }


}

export {renderTodo}