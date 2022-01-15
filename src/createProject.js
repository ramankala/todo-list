import { deRender, deRenderTitle } from "./deRender";
import { generateTitle } from "./generateTitle";
import render from "./render";

const createProj = (toDoList) => {
    const projList = document.querySelector("#projectList");
    const newProj = document.createElement('div');
    newProj.classList.add('newProj');

    const projectName = window.prompt("Enter name of project:");
    let filteredName = projectName.toLowerCase();

    newProj.textContent = projectName;

    toDoList[filteredName] = [];
    

    // newProj are projects in the list users can click to view ToDos

    newProj.addEventListener('click', function(e){
        deRender();
        render(toDoList[filteredName]);
        deRenderTitle();
        generateTitle(projectName);
    })

    projList.appendChild(newProj);
}

export {createProj}