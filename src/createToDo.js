import {todoFactory} from './todoFactory';
import pushToDo from './pushToDo';
import render from './render';

const createToDo = () => {
    let title = window.prompt("Enter title of ToDo:");
    let description = window.prompt("Enter description of ToDo:");
    let dueDate = window.prompt("Enter due date of ToDo:");
    let priority = window.prompt("Enter priority of ToDo:");
    let location = window.prompt("Enter the project you want this ToDo in:");

    if ((title == "" || title == null) || (description == "" || description == null) || (dueDate == "" || dueDate == null) || (priority == "" || priority == null)){

    }
    else {
        const item = todoFactory(title, description, dueDate, priority, location);

        return item;
    }
}

const createToDoBtn = (todoList) => {

    const item = createToDo();

    if (item.location == "default" || item.location == "" || item.location == null){
        pushToDo(item, todoList.defaultProj);
        render(todoList.defaultProj);
        return;
    }
    else {
        pushToDo(item, todoList[item.location]);
        render(todoList[item.location]);
        return;
    }
}

export {
    createToDo,
    createToDoBtn
};