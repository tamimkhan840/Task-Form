/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import { TaskComponent } from "../context"


function TaskForm() {
  const [text ,setText] = useState('')
  const {dispatch,textEdit, setTextEdit} =useContext(TaskComponent)
   useEffect(() =>{
    if (textEdit) {
      setText(textEdit.text)
    }
  }, [textEdit])

  const handleClick =(e) => {
    e.preventDefault()
    if (textEdit) {
      dispatch({
        type: "UPDATE_TASK",
        payload:{
          ...textEdit,
          text: text
        }
      })
    setTextEdit(null)
    }else {

      dispatch({
        type: "ADD_TASK",
        payload: {
          id: crypto.randomUUID(),
          text: text
        }
      })
    }
    setText("")

  }



  return (
    <form className="col-span-4 bg-slate-300 ">
        <label className="font-semibold text-2xl " htmlFor="task" >Task Form</label>
        <input value={text} onChange={(e) => setText(e.target.value)} className="w-full bg-white border-neutral-500 py-2 px-2 my-2 rounded-md shadow-md" placeholder="Enter your text ..." type="text" />
        <button type="submit" onClick={handleClick} className="bg-green-800 px-3 py-2 rounded shadow-md ">{textEdit ? "Update Task" :"Add Task"}</button>
    </form>
  )
}

export default TaskForm
