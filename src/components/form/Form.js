import { useEffect, useState } from "react";
import Input from "../input/input";

const Form = ({tasks, setTasks}) => {
    const [value, setValue] = useState('all')
    const active = tasks.filter((item) => !item.isComplited)
    const completed = tasks.filter((item) => item.isComplited)
    useEffect(() => {
        if(value === 'all'){
            setTasks(active + completed)
        } else if(value === 'active'){
            setTasks(active)
        } else if(value === 'completed'){
            setTasks(completed)
        }
    }, [value]

    )
    return (
        <form action="" className="form" value={value} onChange={(e) => setValue(e.target.value)}>
            <Input tasks={tasks} setTasks={setTasks}/>
            <select className="todo__options">
                <option value="all">все</option>
                <option value="active">активные</option>
                <option value="completed">завершённые</option>
            </select>
        </form>
    )
  }
  
  export default Form;
  