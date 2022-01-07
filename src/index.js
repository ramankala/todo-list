import {todoFactory} from './todoFactory';
import pushToDo from './pushToDo';
import render from './render';

const todoFlow = (() => {

    let toDoArr = [];

    const item = todoFactory('grocery', 'apples', 'xxx', '1');

    pushToDo(item, toDoArr);

    render(toDoArr);

    return { item, toDoArr };
})();

// console.log(todoFlow.item);
console.log(todoFlow.toDoArr);