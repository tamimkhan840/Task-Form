import { useContext } from "react"
import TaskHear from "./TaskHear"
import TaskList from "./TaskList"
import { TaskComponent } from "../context"


function TaskItem() {
const {tasks} = useContext(TaskComponent)
  return (

    <div className="col-span-8 bg-slate-300 ">
        <TaskHear />

        {
            tasks.map(task =>
                 {
                return <TaskList key={task.id}  task={task}/>
              })
        }

    </div>
  )
}

export default TaskItem