import {projectList} from "./logic.js";
import closeImage from "./images/close.svg"
import { clearChildDoms } from "./clearChildDoms.js";

function renderSidebar() {
    const projectListDiv = document.querySelector(".project-list");
    clearChildDoms(projectListDiv);
    const projects = projectList.getProjects();
    for (const project of projects) {
        const div = document.createElement('div');
        div.className = "project";

        const p = document.createElement('p');
        p.textContent = project.title;

        const img = document.createElement('img');
        img.src = closeImage;
        img.addEventListener('click', (e)=> {
            projectList.removeProject(project)
            e.target.parentNode.remove();
        })

        div.appendChild(p);
        div.appendChild(img);
        projectListDiv.appendChild(div);
    }
}



export {renderSidebar};