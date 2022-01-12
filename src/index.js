import {createProj} from './createProject';
import {defaultProj} from './defaultProj';
import {toDoBtn} from './toDoBtn';

const toDoFlow = (() => {

    const toDoList = {
        defaultProj: [],
    };

    defaultProj(toDoList);

    toDoBtn(toDoList);

    const projectBtn = document.querySelector("#createProjectBtn");

    projectBtn.addEventListener('click', function(){
        createProj(toDoList);
    })





    return { toDoList };
})();

// console.log(todoFlow.item);
// console.log(toDoFlow.toDoList);
console.log("project a: " + toDoFlow.toDoList.projectA);