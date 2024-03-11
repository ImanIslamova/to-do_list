import Input from "../input/input";

const Form = () => {
    return (
        <form action="" className="form">
            <Input />
            <select className="todo__options">
                <option value="all">все</option>
                <option value="active">активные</option>
                <option value="completed">завершённые</option>
            </select>
         </form>
    )
  }
  
  export default Form;
  