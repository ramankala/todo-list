import {createToDoBtn} from './createToDo';

const toDoBtn = (toDoList) => {
    const toDoBtn = document.getElementById('submitToDo');
    const titleField = document.getElementById('addTitle');
    const dateField = document.getElementById('addDate');

    toDoBtn.addEventListener('click', (e)=> {

        if (titleField.value === "" && dateField.value === ""){

        }
        else {
            e.preventDefault();
            createToDoBtn(toDoList);
        }
    });
}

export { toDoBtn }