export default function render (toDoArr) {
    let content = document.querySelector("#content");
    toDoArr.forEach(function(item, index, array){
        let toDoDiv = document.createElement("div");
        toDoDiv.setAttribute("id", "toDoDiv");
        console.log(`toDoArr item:${toDoArr} at index:${index}`);
        console.log(`item.title: ${item.title}`);
        toDoDiv.textContent = item.title + " " + item.description + " " + item.dueDate + " " + item.priority;

        content.appendChild(toDoDiv);
    });
    // content.appendChild(toDoDiv);
}