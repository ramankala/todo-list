import { deRender } from "./deRender";
import render from "./render";

const defaultProj = (toDoList) => {

    const defaultProj = document.createElement('div');
    defaultProj.textContent = "Default";

    const projectList = document.querySelector("#projectList");

    defaultProj.addEventListener('click', function(){
        deRender();
        render(toDoList.defaultProj);
    });


    projectList.appendChild(defaultProj);
}

export { defaultProj }