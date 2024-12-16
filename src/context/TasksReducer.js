function TasksReducer(tasks, action) {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TASK": {
            return [
                ...tasks,
                payload
            ];
        }

        case "UPDATE_TASK": {
            return tasks.map(task => {
                if (task.id === payload.id) {
                    return payload;
                } else {
                    return task; // Add this return statement
                }
            });
        }
        case "DELETE_TASK": {
            return tasks.filter(t => t.id !== payload)
        }
        case "ALL_DELETE_TASK": {
            return []
        }

        default:
            return tasks; // Return current state by default
    }
}

export { TasksReducer };





