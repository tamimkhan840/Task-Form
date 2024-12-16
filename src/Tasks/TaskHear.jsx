import { useContext } from "react"
import { TaskComponent } from "../context"

function TaskHear() {
  const {dispatch} = useContext(TaskComponent)
  return (
    <div className="flex justify-between px-4 ">
        <h2 className="text-2xl font-semibold">Task List</h2>
        <button onClick={() =>{ dispatch({ type: "ALL_DELETE_TASK" })
      }} className="bg-red-700 text-base px-3 py-2 rounded-md hover:bg-red-500 shadow-md">Delete All</button>
    </div>
  )
}

export default TaskHear
