import React from 'react';
import Todo from './Todo';


const TodoList = ({todos, toggleTodo}) => {

    return (
      <ul>
        {
          todos.map((todo) => (
            <Todo
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              //use matching ids instead of index
              toggleTodo={() => toggleTodo(todo.id)}
            />
          ))
        }
      </ul>
    )

}

export default TodoList;
