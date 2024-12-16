import { useReducer, useState } from "react";
import TaskComponents from "./Tasks/TaskComponents"
import { initialTasks } from "./data/initialTasks";
import { TaskComponent } from "./context";
import { TasksReducer } from "./context/TasksReducer";



function App() {
  // const [tasks, setTasks] = useState(initialTasks());
    const [textEdit, setTextEdit] = useState(null)
    const [tasks, dispatch] = useReducer(TasksReducer, initialTasks());



  const providerValue = {
    tasks,
    dispatch,
    textEdit,
    setTextEdit
  }
  return (
    <TaskComponent.Provider value={providerValue}>
       <TaskComponents/>
    </TaskComponent.Provider>

  )
}

export default App
