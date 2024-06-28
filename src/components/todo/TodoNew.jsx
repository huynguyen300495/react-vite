

const TodoNew = (props) => {
    const {addNewTodo} = props

    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        console.log(name)
    }
    // addNewTodo("Huy")
    return(
        <div className='todo-new'>
            <input type="text" 
                onChange={((event) => handleOnChange(event.target.value) )}
            />
            <button style={{cursor: "pointer"}} onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew;