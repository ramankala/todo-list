import { deRender, deRenderTitle } from "./deRender";
import { generateTitle } from "./generateTitle";
import render from "./render";

const defaultProj = (toDoList) => {

    const defaultProj = document.createElement('div');
    defaultProj.classList.add('newProj');
    defaultProj.textContent = "Default";

    const projectList = document.querySelector("#projectList");

    defaultProj.addEventListener('click', function(){
        deRender();
        render(toDoList.defaultProj);
        deRenderTitle();
        generateTitle();

    });


    projectList.appendChild(defaultProj);
}

export { defaultProj }