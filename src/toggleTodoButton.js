import { projectList } from "./logic";

function toggleTodoButton() {
    const button = document.querySelector(".create-todo");
    if (projectList.getCurrentProject() == null) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }


}

export {toggleTodoButton};