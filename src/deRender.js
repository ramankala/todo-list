const deRender = () => {
    let parent = document.querySelector("#content");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export { deRender };