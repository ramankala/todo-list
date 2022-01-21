
const getFromLocal = () => {

    const localJsonList = localStorage.getItem("projectList");

    const localList = JSON.parse(localJsonList);

    return localList
}

export { getFromLocal }