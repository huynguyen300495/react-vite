
const TodoData = (props) => {

    const {name, age, data, todoList} = props

    console.log(todoList)
    return(
        <div className='todo-data'>

            <div>{name}</div>
            <div>{age}</div>
            <div>{JSON.stringify(data)}</div>

            <div>
                {JSON.stringify(todoList)}

            </div>
            
        </div>
    )
}

export default TodoData;