const todoFactory = (title, description, dueDate, priority, location) => {
    return {title, description, dueDate, priority, location};
};

export {todoFactory};