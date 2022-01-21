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

    console.log(localStorage);

    const localProj = getFromLocal();
    console.log(localProj);

    if (localProj == null){

        console.log("localStorage is empty");

        generateTitle();

        defaultProj(toDoList);
    
        toDoBtn(toDoList);
    
        const projectBtn = document.querySelector("#createProjectBtn");
    
        projectBtn.addEventListener('click', function(){
            createProj(toDoList);
        });

    }
    else {

        console.log("localStorage has something");

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

// console.log(todoFlow.item);
// console.log(toDoFlow.toDoList);
// console.log("project a: " + toDoFlow.toDoList.defaultProj);