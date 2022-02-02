import { format, parse } from 'date-fns';
import {todoFactory} from './todoFactory';
import pushToDo from './pushToDo';
import render from './render';
import { deRender } from './deRender';
import { generateTitle } from './generateTitle';
import { addToLocal } from './addToLocal';

const createToDo = () => {
    const getTitle = document.getElementById('addTitle');
    const getDesc = document.getElementById('addDesc');
    const getDate = document.getElementById('addDate');
    const getPriority = document.getElementById('addPriority');
    const getLocation = document.getElementById('addLocation')

    const title = getTitle.value;
    const description = getDesc.value;
    const date = getDate.value;
    const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
    const formattedDate = format(parsedDate, "MM/dd/yyyy");
    let priority = getPriority.value;
    priority = priority.toLowerCase();
    let location = getLocation.value;
    location = location.toLowerCase();

    const item = todoFactory(title, description, formattedDate, priority, location);

    return item;
}

const createToDoBtn = (todoList) => {

    const item = createToDo();

    if (item.location === "default" || item.location === "" || item.location == null){
        pushToDo(item, todoList.Default);

        deRender();
        render(todoList.Default);
        addToLocal(todoList);
        generateTitle("Default");
        return todoList;
    }
    
        pushToDo(item, todoList[item.location]);
        deRender();
        render(todoList[item.location]);
        addToLocal(todoList);
        generateTitle(item.location);
        return todoList;
    

}

export {
    createToDo,
    createToDoBtn
};