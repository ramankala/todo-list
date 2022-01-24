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

    // localStorage is empty

    if (localProj == null){

        generateTitle();

        defaultProj(toDoList);
    
        toDoBtn(toDoList);
    
        const projectBtn = document.querySelector("#createProjectBtn");
    
        projectBtn.addEventListener('click', function(){
            createProj(toDoList);
        });

    }

    // localStorage has items
    else {

        render(localProj.Default);

        generateTitle();

        renderProjList(localProj);
    
        toDoBtn(localProj);
    
        const projectBtn = document.querySelector("#createProjectBtn");
    
        projectBtn.addEventListener('click', function(){
            createProj(localProj);
        });
    }



    return { toDoList };
})();