import {createToDoBtn} from './createToDo';

const toDoBtn = (toDoList) => {
    const toDoBtn = document.querySelector("#createToDoBtn");

    toDoBtn.addEventListener('click', function(){
        createToDoBtn(toDoList);
    });
}

export { toDoBtn }