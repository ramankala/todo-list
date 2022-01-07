import {todoFactory} from './todoFactory';

export default function createToDo(){
    let title = window.prompt("Enter title of ToDo:");
    let description = window.prompt("Enter description of ToDo:");
    let dueDate = window.prompt("Enter due date of ToDo:");
    let priority = window.prompt("Enter priority of ToDo:");

    if ((title == "" || title == null) || (description == "" || description == null) || (dueDate == "" || dueDate == null) || (priority == "" || priority == null)){

    }
    else {
        const item = todoFactory(title, description, dueDate, priority);

        return item;
    }
}