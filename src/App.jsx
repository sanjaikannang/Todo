import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css'; 

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');

  const handleAddTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const handleEditStatus = (index) => {
    const updatedTaskList = taskList.map((task, i) =>
      i === index ? { ...task, status: task.status === 'Not Completed' ? 'Completed' : 'Not Completed' } : task
    );
    setTaskList(updatedTaskList);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredTasks = statusFilter === 'All' ? taskList : taskList.filter(task => task.status === statusFilter);

  return (
    <div>
      <TodoForm onAddTask={handleAddTask} onStatusFilterChange={handleStatusFilterChange} />
      <TodoList tasks={filteredTasks} onEditStatus={handleEditStatus} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
