const Task = ({ task, data, setTasks, tasks }) =>{
    const deleteTasks = () =>{
        setTasks(tasks.filter((item) => item.task !== task))
    };
    const completeTasks = () =>{
       setTasks(tasks.filter((item) => item.task !== task))
    };

    return (
        <li className="todo__item" >
            <span className="todo__task">{task}</span>
            <div className="todo__data">{data}</div>
            <span className="todo__action todo__action_complete" onClick={completeTasks}></span>
            <span className="todo__action todo__action_delete" onClick={deleteTasks}></span>
        </li> 
    )
}

export default Task;

//<Task {'todo__item ' + (isCompleted ? 'completed' : '')}/>;