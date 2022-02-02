import { removeToDo } from './removeToDo';

export default function render(toDoArr) {
  const content = document.querySelector('#content');

  toDoArr.forEach((item, index) => {
    const toDoDiv = document.createElement('div');
    toDoDiv.setAttribute('id', `toDoDiv${index}`);
    toDoDiv.classList.add('toDoDiv');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv');

    const descDiv = document.createElement('div');
    descDiv.setAttribute('id', 'descDiv');
    descDiv.classList.add('invisibleDesc');

    const dueDiv = document.createElement('div');
    dueDiv.classList.add('dueDiv');

    const priorityDiv = document.createElement('div');
    if (item.priority === 'high') {
      priorityDiv.classList.add('highPriority');
    } else if (item.priority === 'medium') {
      priorityDiv.classList.add('mediumPriority');
    } else {
      priorityDiv.classList.add('lowPriority');
    }

    const toggleBox = document.createElement('input');
    toggleBox.type = 'checkbox';

    toggleBox.addEventListener('click', () => {
      item.toggle();
    });

    let count = 1;
    titleDiv.addEventListener('click', () => {
      if (count % 2 !== 0) {
        descDiv.classList.remove('invisibleDesc');
        descDiv.contentEditable = true;
        count += 1;
      } else {
        descDiv.classList.add('invisibleDesc');
        count += 1;
      }
    });

    const removeBtn = removeToDo(toDoArr, index);

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
