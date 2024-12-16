/* eslint-disable react/prop-types */
import TaskForm from "./TaskForm"
import TaskItem from "./TaskItem"


function TaskComponents() {
  return (
    <div className="w-11/12 mx-auto bg-slate-300 grid grid-cols-12 gap-3 p-4 my-4">
        <TaskForm
        // onAdd={onAdd}
        //  onTextEdit={onTextEdit}
        //  onUpDate={onUpDate}
         />


        <TaskItem
        //  tasks={tasks}
        //   onDelete={onDelete}
        //   onEdit={onEdit}
          />
    </div>
  )
}

export default TaskComponents
// {tasks, onDelete, onAdd, onEdit, onTextEdit, onUpDate}