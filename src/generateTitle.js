import { deRenderTitle } from "./deRender";


const generateTitle = (projectName) => {

    const projTitle = document.createElement('div');
    projTitle.classList.add('projTitle');
    const bodyTitle = document.querySelector('#bodyTitle');

    const title1 = document.createElement('div');
    title1.classList.add('title1');
    const title2 = document.createElement('div');
    title2.classList.add('title2');
    title2.textContent = "Due Date";


    if (projectName == "" || projectName == null){

        title1.textContent = "Default";

        projTitle.appendChild(title1);

    }
    else {

        title1.textContent = projectName;

        projTitle.appendChild(title1);

    }

    projTitle.appendChild(title2);


    deRenderTitle();
    bodyTitle.prepend(projTitle);
}


export { generateTitle }