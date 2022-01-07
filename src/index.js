import pushToDo from './pushToDo';
import render from './render';
import createToDo from './createToDo';

const todoFlow = (() => {

    let toDoArr = [];

    const item = createToDo();

    pushToDo(item, toDoArr);

    render(toDoArr);


    return { item, toDoArr };
})();

// console.log(todoFlow.item);
console.log(todoFlow.toDoArr);