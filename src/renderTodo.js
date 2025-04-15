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
        if (todo.isComplete) {
            todoCheckBox.checked = true;
            h4.style.textDecoration = 'line-through';
            pDesc.style.textDecoration = 'line-through';
        } else {
            todoCheckBox.checked = false;
            h4.style.textDecoration = 'none';
            pDesc.style.textDecoration = 'none';
        }

        todoCheckBox.addEventListener('change', () => {
            if (todoCheckBox.checked) {
                todo.isComplete = true;
                h4.style.textDecoration = 'line-through';
                pDesc.style.textDecoration = 'line-through';
            } else {
                todo.isComplete = false;
                h4.style.textDecoration = 'none';
                pDesc.style.textDecoration = 'none';
            }
        })

        const img = document.createElement('img');
        img.src = closeImg;
        img.addEventListener('click', (e) => {
            projectList.getCurrentProject().removeTodo(todo);
            e.target.parentNode.remove();
        })


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