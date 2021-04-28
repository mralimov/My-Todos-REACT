import React, { useState } from 'react';
import './App.css';
import FormTodos from './components/Form';
import Todos from './components/Todos';
function App() {
  const [inputText, setInputText] = useState('');
  const [todosList, setTodosList] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>{inputText}</h1>
      </header>
      <FormTodos inputtedText={setInputText} />
      <Todos />
    </div>
  );
}

export default App;
