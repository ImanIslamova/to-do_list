
import { useState } from "react";

const Input = ({tasks, setTasks}) =>{
  const [value, setValue] = useState('');
  const changeValue = (event) =>{
    setValue(event.target.value)
  };
  const getInputValue = (e) =>{
    e.preventDefault();
    if(setValue.trim() !== '' && tasks.every((task) => task.value !== setValue)){
      setTasks([...tasks, { task: value, isComplited: false, data: new Date().toLocaleString()}]);
    }
    setValue = ''
  };
  
  return(
    <div className="todo__input">
      <input className="todo__text" type="text" value={value} onChange={changeValue} />
      <button className="todo__add" onClick={getInputValue}></button>
    </div>  
  )
}

export default Input;