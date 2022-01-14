const deRender = () => {
    let parent = document.querySelector("#content");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const deRenderTitle = () => {
    let parent = document.querySelector("#bodyTitle");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export {
    deRender,
    deRenderTitle
};