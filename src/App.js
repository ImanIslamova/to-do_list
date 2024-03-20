import { useEffect, useState } from "react";
import React from 'react'; 
import Form from './components/form/Form';
import Container from './components/container/container';


const App = () => {
  const [tasks, setTasks] = useState(
    localStorage.getIte('task') ? JSON.parse(localStorage.getItem('task')) : [],
  );
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks]);
  return  (
    <div className="todo">
      <Form tasks={tasks} setTasks={setTasks}/>
      <Container tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App;
