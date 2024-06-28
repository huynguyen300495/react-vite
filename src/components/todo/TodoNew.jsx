
import { useState } from "react"

const TodoNew = (props) => {
    const {addNewTodo} = props
    
    const [valueInput, setValueInput] = useState("Huy Nguyen")


    const handleClick = () => {
        
        addNewTodo(valueInput)
    }

    const handleOnChange = (name) => {
        console.log(name)
        setValueInput(name)
    }
    // addNewTodo("Huy")
    return(
        <div className='todo-new'>
            <input type="text" 
                onChange={((event) => handleOnChange(event.target.value) )}
            />
            <button style={{cursor: "pointer"}} onClick={handleClick}>Add</button>
            <div>My name is: {valueInput}</div>
        </div>
    )
}

export default TodoNew;