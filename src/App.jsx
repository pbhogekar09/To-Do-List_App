import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTodoList([...todoList, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">To-Do List</h1>
        <AddTodo task={task} setTask={setTask} handleAdd={handleAdd} />
        <TodoList todoList={todoList} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
