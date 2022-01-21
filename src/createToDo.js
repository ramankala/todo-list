import {todoFactory} from './todoFactory';
import pushToDo from './pushToDo';
import render from './render';
import { deRender } from './deRender';
import { generateTitle } from './generateTitle';
import { format, parse } from 'date-fns';
import { addToLocal } from './addToLocal';

const createToDo = () => {
    let title = window.prompt("Enter title of ToDo:");
    let description = window.prompt("Enter description of ToDo:");

    let dueDate;
    let parsedDate;
    let formattedDate;

    try {
        dueDate = window.prompt("Enter due date of ToDo(MM/DD/YYYY):");
        parsedDate = parse(dueDate, 'MM/dd/yyyy', new Date());
        formattedDate = format(parsedDate, "MM/dd/yyyy");
    }
    catch(err){
        window.alert("enter date in 'MM/dd/yyyy' format.");
        return;
    }

    let priority = window.prompt("Enter priority of ToDo(High, Medium, or Low):");
    priority = priority.toLowerCase();
    let location = window.prompt("Enter the project you want this ToDo in:");
    location = location.toLowerCase();

    if ((title == "" || title == null) || (description == "" || description == null) || (formattedDate == "" || formattedDate == null) || (priority == "" || priority == null)){

    }
    else {
        const item = todoFactory(title, description, formattedDate, priority, location);

        return item;
    }
}

const createToDoBtn = (todoList) => {

    const item = createToDo();

    if (item.location == "default" || item.location == "" || item.location == null){
        pushToDo(item, todoList.Default);
        console.log(todoList);
        deRender();
        render(todoList.Default);
        addToLocal(todoList);
        generateTitle("Default");
        return todoList;
    }
    else {
        pushToDo(item, todoList[item.location]);
        console.log(todoList);
        deRender();
        render(todoList[item.location]);
        addToLocal(todoList);
        generateTitle(item.location);
        return todoList;
    }

}

export {
    createToDo,
    createToDoBtn
};