import React from 'react';

function TodoItem({ item, index, deleteTask }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded shadow-sm">
      <span>{item}</span>
      <button
        onClick={() => deleteTask(index)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
