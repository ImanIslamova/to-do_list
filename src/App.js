import React from 'react'; 
import Form from './components/form/Form';
import Container from './components/container/container';
import BlockAdvertising from './components/blockAdvertising/blockAdvertising';


const App = () => {
  return  (
    <div className="todo">
      <Form />
      <Container />
      <BlockAdvertising />
    </div>
  )
}

export default App;
