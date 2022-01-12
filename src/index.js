import render from './render';
import {createToDoBtn} from './createToDo';
import {deRender} from './deRender';

const toDoFlow = (() => {

    const toDoList = {
        projectA: [],
        projectB: [],
        projectC: [],
    };

    const projectA = document.createElement('div');
    projectA.textContent = "Project A";
    const projectB = document.createElement('div');
    projectB.textContent = "Project B";
    const projectC = document.createElement('div');
    projectC.textContent = "Project C";

    const projectList = document.querySelector("#projectList");

    const toDoBtn = document.querySelector("#createToDoBtn");


    toDoBtn.addEventListener('click', function(){
        createToDoBtn(toDoList);
    });

    projectA.addEventListener('click', function(){
        deRender();
        render(toDoList.projectA);
    });
    projectB.addEventListener('click', function(){
        deRender();
        render(toDoList.projectB);
    });
    projectC.addEventListener('click', function(){
        deRender();
        render(toDoList.projectC);
    });


    projectList.appendChild(projectA);
    projectList.appendChild(projectB);
    projectList.appendChild(projectC);






    return { toDoList };
})();

// console.log(todoFlow.item);
// console.log(todoFlow.toDoArr);
console.log("project a: " + toDoFlow.toDoList.projectA);
console.log("project b:" + toDoFlow.toDoList.projectB);
console.log("project c:" + toDoFlow.toDoList.projectC);