import React from 'react';

const FormTodos = ({ inputtedText }) => {
  const textInputHandler = e => {
    console.log(e.target.value);
    inputtedText(e.target.value);
  };

  const submitInputTodoHandler = e => {
    e.preventDefault();
  };
  return (
    <form>
      <input onChange={textInputHandler} type="text" className="todo-input" />
      <button
        onClick={submitInputTodoHandler}
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default FormTodos;
