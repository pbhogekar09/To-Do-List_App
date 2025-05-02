import React from 'react';

function AddTodo({ task, setTask, handleAdd }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
