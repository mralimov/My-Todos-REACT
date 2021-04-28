import React from 'react';
import './App.css';
import FormTodos from './components/Form';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Donnie's Todos List</h1>
      </header>
      <FormTodos />
    </div>
  );
}

export default App;
