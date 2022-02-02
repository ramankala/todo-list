import {createProj} from './createProject';
import {defaultProj} from './defaultProj';
import {toDoBtn} from './toDoBtn';
import { generateTitle } from './generateTitle';
import { getFromLocal } from './getFromLocal';
import render from './render';
import { renderProjList } from './renderProjList';

const toDoFlow = (() => {

    const toDoList = {
        Default: [],
    };

    const localProj = getFromLocal();

    const projectBtn = document.getElementById("submitProject");
    const projField = document.getElementById('addProject');

    // localStorage is empty

    if (localProj == null){

        generateTitle();

        defaultProj(toDoList);
    
        toDoBtn(toDoList);
    
        projectBtn.addEventListener('click', (e)=> {
            if (projField.value === ""){

            }else {
                e.preventDefault();
                createProj(toDoList);
            }
        });

    }

    // localStorage has items
    else {

        render(localProj.Default);

        generateTitle();

        renderProjList(localProj);
    
        toDoBtn(localProj);
    
        projectBtn.addEventListener('click', (e)=> {
            if (projField.value === ""){

            }else {
                e.preventDefault();
                createProj(localProj);
            }
        });
    }



    return { toDoList };
})();