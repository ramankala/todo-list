import {createToDoBtn} from './createToDo';
import { deRender } from './deRender';
import render from './render';

const toDoBtn = (toDoList) => {
    const toDoBtn = document.querySelector("#createToDoBtn");


    toDoBtn.addEventListener('click', function(){
        createToDoBtn(toDoList);
        deRender();
        render(toDoList.defaultProj);
    });
}

export { toDoBtn }