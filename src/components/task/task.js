const Task = ({ value, data }) =>{
    return (
        <li className="todo__item">
            <span class="todo__task">{value}</span>
            <span class="todo__task">{data}</span>
            <span className="todo__action todo__action_complete"></span>
            <span className="todo__action todo__action_delete"></span>
        </li> 
    )
}

export default Task;