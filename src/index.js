import {todoFactory} from './todoFactory';
import pushToDo from './pushToDo';

const todoFlow = (() => {

    let toDoArr = [];

    const item = todoFactory('grocery', 'carrots', 'xxx', '1');

    pushToDo(item, toDoArr);

    function render () {
        toDoArr.forEach(function(item, array, index){
            let toDoDiv = document.createElement("div");
            
        });
    }

    return { item, toDoArr };
})();

// console.log(todoFlow.item);
console.log(todoFlow.toDoArr);