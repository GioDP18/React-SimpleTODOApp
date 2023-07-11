import { useState } from 'react'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoList from './Components/TodoList/TodoList'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import EditTodo from './Components/EditTodo/EditTodo';

function App() {
  const [todos, setTodos] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editTodo, setEditTodo] = useState({})

  const addTodo = (todo_name) => {
    setTodos(prv => [...prv, {
      id : Date.now(),
      name : todo_name,
      completed : false
    }])

    toast ("Added Successfully", {
      type: "success",
      position: "top-center",
      autoClose: 3000
    })
  }

  const changeStatus = (todo_id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id == todo_id){
        return{...todo, completed : !todo.completed}
      }
      else{
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (todo_id) => {
    const updatedTodos = todos.filter((todo) => {
      if (todo.id !== todo_id){
        return todo
      }
    })
    setTodos(updatedTodos)
    // const notify = () => toast("Wow so easy!")

    toast ("Deleted Successfully", {
      type: "success",
      position: "top-center",
      autoClose: 3000
    })
  }

  const showEditForm = (todo) => {
    setIsEditing(prv => !prv)
    setEditTodo(todo)
  }

  const closeEditForm = () => {
    setIsEditing(prv => !prv)
  }

  const updateTodo = (todo_id, todo_name) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id == todo_id){
        return{...todo, name : todo_name}
      }
      else{
        return todo
      }
    })
    setTodos(updatedTodos)
    setIsEditing(false)

    toast ("Successfully updated Todo", {
      type: "success",
      position: "top-center",
      autoClose: 3000
    })
  }


  return (
    <div className="app">
      <h1>TODO Application</h1>
      <TodoForm addTodo={addTodo}/>
      {
        isEditing ? <EditTodo editTodo={editTodo} closeEditForm={closeEditForm} updateTodo={updateTodo}/> : <TodoList todos={todos} changeStatus={changeStatus} deleteTodo={deleteTodo} showEditForm={showEditForm}/>
      }
      
      <ToastContainer />
    </div>
  )
}

export default App
