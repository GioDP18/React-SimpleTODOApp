import React, {useState} from 'react'
import './EditTodo.css'

const EditTodo = ({editTodo, closeEditForm, updateTodo}) => {
    const [text, setText] = useState(editTodo.name)

    const handleUpdate = () => {
        updateTodo(editTodo.id, text)
    }

  return (
    <div className="edit-form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <div className="btns">
        <button className="btn1" onClick={handleUpdate}>Update</button>
        <button className="btn2" onClick={() => closeEditForm()}>Cancel</button>
      </div>
    </div>
  )
}

export default EditTodo
