
const removeToDo = (toDoArr, index) => {
    let removeBtn = document.createElement("div");
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = 'X';

    removeBtn.addEventListener('click', function(){
        toDoArr.splice(index, 1);
        document.getElementById(`toDoDiv${index}`).remove();
    });

    return removeBtn;
}

export { removeToDo };