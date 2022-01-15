const todoFactory = (title, description, dueDate, priority, location, isComplete= false) => {

    let state = {
        title,
        description,
        dueDate,
        priority,
        location,
        isComplete,
    }

    return {
        get title(){ return state.title;},
        get description(){ return state.description;},
        get dueDate(){ return state.dueDate;},
        get priority(){ return state.priority;},
        get location(){ return state.location;},
        get isComplete(){ return state.isComplete;},
        toggle(){ state.isComplete = !state.isComplete;}
    };
};

export {todoFactory};