import { addToLocal } from "./addToLocal";
import { deRender, deRenderTitle } from "./deRender";
import { generateTitle } from "./generateTitle";
import render from "./render";

const createProj = (toDoList) => {
    const projName = document.getElementById('addProject')
    const projList = document.querySelector("#projectList");
    const newProj = document.createElement('div');
    newProj.classList.add('newProj');

    const projectName = projName.value;
    const filteredName = projectName.toLowerCase();

    newProj.textContent = projectName;

    toDoList[filteredName] = [];

    addToLocal(toDoList);
    

    // newProj are projects in the list users can click to view ToDos

    newProj.addEventListener('click', ()=> {
        deRender();
        render(toDoList[filteredName]);
        deRenderTitle();
        generateTitle(projectName);
    })

    projList.appendChild(newProj);
}

export {createProj}