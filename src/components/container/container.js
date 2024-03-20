import Task from "../task/task";

const Container = ({tasks, setTasks}) =>{
    return (
        <ul className="todo__items">
            {tasks.map(({ task, isCompleted }) => (
                <Task task={task} data={task} setTasks={setTasks} tasks={tasks} key={task}/>
            ))}
        </ul>  
    )
}

export default Container;