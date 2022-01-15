
export default function render (toDoArr) {
    let content = document.querySelector("#content");
    toDoArr.forEach(function(item, index, array){
        let toDoDiv = document.createElement("div");

        let titleDiv = document.createElement("div");
        titleDiv.classList.add('titleDiv');

        let descDiv = document.createElement("div");
        descDiv.classList.add('descDiv');

        let dueDiv = document.createElement("div");
        dueDiv.classList.add('dueDiv');

        let priorityDiv = document.createElement("div");
        console.log(`item.priority = ${item.priority}`);
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
            console.log(`item.isComplete: ${item.isComplete}`);
        });

        titleDiv.textContent = item.title;
        descDiv.textContent = item.description;
        dueDiv.textContent = item.dueDate;

        toDoDiv.appendChild(priorityDiv);
        toDoDiv.appendChild(toggleBox);
        toDoDiv.appendChild(titleDiv);
        toDoDiv.appendChild(descDiv);
        toDoDiv.appendChild(dueDiv);

        toDoDiv.setAttribute("id", "toDoDiv");
        console.log(`toDoArr item:${toDoArr} at index:${index}`);
        console.log(`item.title: ${item.title}`);
        // toDoDiv.textContent = item.title + " " + item.description + " " + item.dueDate + " " + item.priority;

        content.appendChild(toDoDiv);
    });
    // content.appendChild(toDoDiv);
}