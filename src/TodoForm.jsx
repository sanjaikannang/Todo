import React, { useState } from 'react';
import './TodoForm.css'; 

const TodoForm = ({ onAddTask, onStatusFilterChange }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = {
      taskName,
      description,
      status: 'Not Completed', 
    };
    onAddTask(newTask);
    setTaskName('');
    setDescription('');
  };

  return (
    <div className='container'>
    <div className="todo-form">
      <h2>My Todo</h2>
      <div className="input-row">
        <div className="input-group">
          <input placeholder='Todo Name' type="text" value={taskName} onChange={handleTaskNameChange} />
        </div>
        <div className="input-group">
          <input placeholder='Todo Description' value={description} onChange={handleDescriptionChange} />
        </div>
        <button className="add-button" onClick={handleAddTask}>Add Todo</button>
      </div>
      <div className="status-filter">
        <label>Status Filter:</label>
        <select onChange={onStatusFilterChange}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
    </div>
    </div>
  );
};

export default TodoForm;
