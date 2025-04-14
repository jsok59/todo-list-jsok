import { projectList } from "./logic"
import { compareAsc } from "date-fns";

function sortTodos() {
    const todos = projectList.getCurrentProject().todos;
    todos.sort(compareTodoFn);
}

function compareTodoFn(a,b) {
    if (a.dueDate.valueOf() != b.dueDate.valueOf()) {
        return compareAsc(a.dueDate,b.dueDate)
    } else {
        return a.priority - b.priority;
    }
}


export {sortTodos};

