import { deRenderTitle } from "./deRender";


const generateTitle = (projectName) => {

    deRenderTitle();

    const bodyTitle = document.querySelector('#bodyTitle');

    const title1 = document.createElement('div');
    title1.classList.add('title1');
    const title2 = document.createElement('div');
    title2.classList.add('title2');
    title2.textContent = "Due Date";


    if (projectName == "" || projectName == null){

        title1.textContent = "Default";
        bodyTitle.appendChild(title1);

    }
    else {

        title1.textContent = projectName;

        bodyTitle.appendChild(title1);

    }

    bodyTitle.appendChild(title2);
}


export { generateTitle }