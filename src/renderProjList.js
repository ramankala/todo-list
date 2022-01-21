import { deRender, deRenderTitle } from "./deRender";
import { generateTitle } from "./generateTitle";
import render from "./render";
const renderProjList = (localProj) => {

    const projList = document.querySelector("#projectList");

    for (const key in localProj){
        const newProj = document.createElement('div');
        newProj.classList.add('newProj');
        newProj.textContent = key;

        newProj.addEventListener('click', function(e){
            deRender();
            render(localProj[key]);
            deRenderTitle();
            generateTitle(key);
        })
    
        projList.appendChild(newProj);
    }
    
}

export { renderProjList }