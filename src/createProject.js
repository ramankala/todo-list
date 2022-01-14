import { deRender, deRenderTitle } from "./deRender";
import { generateTitle } from "./generateTitle";
import render from "./render";

const createProj = (toDoList) => {
    const projList = document.querySelector("#projectList");
    const newProj = document.createElement('div');
    newProj.classList.add('newProj');

    const projectName = window.prompt("Enter name of project:");
    toDoList[projectName] = [];
    

    // newProj are projects in the list users can click to view ToDos

    newProj.textContent = projectName;

    newProj.addEventListener('click', function(){
        deRender();
        render(toDoList[projectName]);
        deRenderTitle();
        generateTitle(projectName);
    })

    projList.appendChild(newProj);
}

export {createProj}