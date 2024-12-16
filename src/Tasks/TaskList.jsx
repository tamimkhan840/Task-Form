/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskComponent } from "../context";


function TaskList({task}) {

    const { dispatch, setTextEdit} = useContext(TaskComponent);

    const handleDelete = () => {
        let isConfirm = confirm('Aer you sure you want to delete it ?');
        if (isConfirm) {
            dispatch({
                type: "DELETE_TASK",
                payload : task.id
            }
            )
        }
    }

  return (
    <div>
        <ul>
            <li className="flex items-center bg-white p-2 my-3 mx-2 rounded-md shadow-md ">
                <p className="text-2xl mr-2">#</p>
                <span className="text-2xl">{task.text}</span>
                <button onClick={() => setTextEdit(task)} className="bg-green-700 text-base px-3 py-2 rounded-md hover:bg-green-500 shadow-md ml-auto">Edit</button>
                <button onClick={handleDelete} className="bg-red-700 text-base px-3 py-2 rounded-md hover:bg-red-500 shadow-md ml-2">Delete</button>
            </li>
        </ul>
    </div>
  )
}

export default TaskList
