import React from 'react';

const Todo = ({task, completed, toggleTodo, removeTodo}) => {
  return (
    <li>
      <span onClick={toggleTodo}>
        {completed ? <strike> {task} </strike> : task}
      </span>
      <button onClick={removeTodo}>Remove</button>
    </li>
  );
}

export default Todo;
