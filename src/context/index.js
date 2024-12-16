import { createContext } from 'react';

const TaskComponent = createContext(
   { tasks: [],
    setTasks: () => {},
    textEdit: {},
    setTextEdit: () => {}
}
);
export {TaskComponent};