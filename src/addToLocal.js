const addToLocal = (toDoArr) => {
  const toDoJson = JSON.stringify(toDoArr);
  localStorage.setItem('projectList', toDoJson);
};

export { addToLocal };
