
const TodoData = (props) => {

    const {todoList, deleteTodo} = props

    const deleteItem = (id) => {
        deleteTodo(id)
    }

    console.log(todoList)
    return(
        <div className='todo-data'>
            {
                todoList.map( (item, index) => {
                    return(
                        <div className="todo-item"  key ={item.id}>
                            <div >{item.name}</div>
                            <button 
                            onClick={() => {deleteItem(item.id)}}
                            style={{cursor:"pointer"}}
                            >Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoData;