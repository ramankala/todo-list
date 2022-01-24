import { removeToDo } from "./removeToDo";

export default function render (toDoArr) {
    let content = document.querySelector("#content");

    toDoArr.forEach(function(item, index, array){
        let toDoDiv = document.createElement("div");
        toDoDiv.setAttribute('id', `toDoDiv${index}`);
        toDoDiv.classList.add('toDoDiv');

        let titleDiv = document.createElement("div");
        titleDiv.classList.add('titleDiv');

        let descDiv = document.createElement("div");
        descDiv.setAttribute('id', 'descDiv');
        descDiv.classList.add('invisibleDesc');

        let dueDiv = document.createElement("div");
        dueDiv.classList.add('dueDiv');

        let priorityDiv = document.createElement("div");
        if (item.priority == "high"){
            priorityDiv.classList.add('highPriority');
        }
        else if (item.priority == "medium"){
            priorityDiv.classList.add('mediumPriority');
        }
        else {
            priorityDiv.classList.add('lowPriority');
        }

        let toggleBox = document.createElement("input");
        toggleBox.type = 'checkbox';

        toggleBox.addEventListener('click', function(){
            item.toggle();
        });

        let count = 1;
        titleDiv.addEventListener('click', function(){

            if (count % 2 != 0){
                descDiv.classList.remove('invisibleDesc');
                descDiv.contentEditable = true;
                count += 1;
            }
            else {
                descDiv.classList.add('invisibleDesc');
                count += 1;
            }

        });

        // Code for calendar drop down meu after I learn about Forms.

        // let dueDateDiv = document.createElement("input");
        // dueDateDiv.type = 'date';

        let removeBtn = removeToDo(toDoArr, index);

        titleDiv.textContent = item.title;
        descDiv.textContent = item.description;
        dueDiv.textContent = item.dueDate;

        toDoDiv.appendChild(priorityDiv);
        toDoDiv.appendChild(toggleBox);
        toDoDiv.appendChild(titleDiv);
        toDoDiv.appendChild(descDiv);
        toDoDiv.appendChild(dueDiv);
        toDoDiv.appendChild(removeBtn);

        content.appendChild(toDoDiv);
    });
}