

const addToLocal = (toDoArr) => {

    console.log("addToLocal");
    console.log(toDoArr);

    const toDoJson = JSON.stringify(toDoArr);
    console.log(toDoJson);
    localStorage.setItem("projectList", toDoJson);
    console.log(localStorage);
}

export { addToLocal }