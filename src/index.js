import render from './render';
import {createToDoBtn} from './createToDo';

const todoFlow = (() => {

    const todoList = {
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

    const content = document.querySelector("#content");

    const toDoBtn = document.querySelector("#createToDoBtn");


    toDoBtn.addEventListener('click', function(){
        createToDoBtn(todoList);
    });

    projectA.addEventListener('click', function(){
        render(todoList.projectA);
    });
    projectB.addEventListener('click', function(){
        render(todoList.projectB);
    });
    projectC.addEventListener('click', function(){
        render(todoList.projectC);
    });


    content.appendChild(projectA);
    content.appendChild(projectB);
    content.appendChild(projectC);




    return { todoList };
})();

// console.log(todoFlow.item);
// console.log(todoFlow.toDoArr);
console.log("project a: " + todoFlow.todoList.projectA);
console.log("project b:" + todoFlow.todoList.projectB);
console.log("project c:" + todoFlow.todoList.projectC);