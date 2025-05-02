import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todoList, deleteTask }) {
  return (
    <ul className="space-y-2">
      {todoList.map((item, index) => (
        <TodoItem key={index} item={item} index={index} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default TodoList;
