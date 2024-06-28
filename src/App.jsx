
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg'
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    {id: 1, name: "Learning React"},
    {id: 2, name: "Learning IOS"}
  ])

  const name = "Huy";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  return (
    <div className="todo-container">

      <div className="todo-title">Todo List</div>
      
      <TodoNew 
      addNewTodo = {addNewTodo}
      />
      <TodoData 
          name={name}
          age = {age}
          data = {data}
          todoList = {todoList}
          
      />
     
      <div className='todo-image'>
        <img src={reactLogo} alt="" />
      </div>
    </div>
  )
}

export default App
