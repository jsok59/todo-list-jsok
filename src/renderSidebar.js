import {projectList} from "./logic.js";
import closeImage from "./images/close.svg"
import { clearChildDoms } from "./clearChildDoms.js";
import { renderHeader } from "./renderHeader.js";


function renderSidebar() {
    const projectListDiv = document.querySelector(".project-list");
    clearChildDoms(projectListDiv);
    const projects = projectList.getProjects();
    for (const project of projects) {
        const div = document.createElement('div');
        div.className = "project";


        const p = document.createElement('p');
        p.textContent = project.title;
        p.id = project.id;
        p.addEventListener('click', () => {
            clearChildDoms(document.querySelector(".project-detail"));
            projectList.setCurrentProject(project.id);
            renderHeader(project);
        })


        const img = document.createElement('img');
        img.src = closeImage;
        img.addEventListener('click', (e)=> {
            projectList.removeProject(project)
            e.target.parentNode.remove();
            clearChildDoms(document.querySelector(".project-detail"));
        })

        div.appendChild(p);
        div.appendChild(img);
        projectListDiv.appendChild(div);
    }
}



export {renderSidebar};