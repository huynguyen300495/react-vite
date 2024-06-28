import TodoData from './TodoData';
import TodoNew from './TodoNew';
import './todo.css';
import reactLogo from '../../assets/react.svg'
import { useState } from 'react';

const TodoApp = () =>{
    const [todoList, setTodoList] = useState([
        // {id: 1, name: "Learning React"},
        // {id: 2, name: "Learning IOS"}
      ])
    
      
    
      const addNewTodo = (name) => {
        const newTodo = {
          id: randomIntFromInterval(1, 10000),
          name : name,
        }
        setTodoList([...todoList, newTodo])
      }
    
      const randomIntFromInterval = (min, max) => { // min and max included
       }
       
    
      const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo)
       
      }
    return(
      <div className="todo-container">
  
      <div className="todo-title">Todo List</div>
      
      <TodoNew 
      addNewTodo = {addNewTodo}
      />
  
      { todoList.length > 0 ?
        <TodoData 
        todoList = {todoList}
        deleteTodo = {deleteTodo}
        />
        :
        <div className='todo-image'>
        <img src={reactLogo} alt="" />
      </div>
      }
      
    
    {/* {todoList.length === 0 && 
      <div className='todo-image'>
        <img src={reactLogo} alt="" />
      </div>} */}
      
    </div>
    )
  }

  export default TodoApp;