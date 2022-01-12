import { deRender } from "./deRender";
import render from "./render";

const createProj = (toDoList) => {
    const projList = document.querySelector("#projectList");
    const newProj = document.createElement('div');
    newProj.classList.add('newProj');

    const projectName = window.prompt("Enter name of project:");
    toDoList[projectName] = [];

    newProj.textContent = projectName;

    newProj.addEventListener('click', function(){
        deRender();
        render(toDoList[projectName]);
    })

    projList.appendChild(newProj);
}

export {createProj}