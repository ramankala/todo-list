export default function render (toDoArr) {
    let content = document.querySelector("#content");
    toDoArr.forEach(function(item, array, index){
        let toDoDiv = document.createElement("div");
        toDoDiv.setAttribute("id", "toDoDiv");
        toDoDiv.textContent = item.title + " " + item.description + " " + item.dueDate + " " + item.priority;

        content.appendChild(toDoDiv);
    });
    content.appendChild(toDoDiv);
}