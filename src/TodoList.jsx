import React from 'react';

const TodoList = ({ tasks, onEditStatus, onDeleteTask }) => {
  return (   
  <div className='container'>   
  <h3>My Todos</h3>
  <div className="todo-list">
      {tasks.map((task, index) => (
        <div key={index} className="todo-card">
          <p>Name : {task.taskName}</p>
          <p>Description : {task.description}</p>
          <p className={`status ${task.status.toLowerCase()}`}>Status :{task.status} </p>
          <button className="edit" onClick={() => onEditStatus(index)}>Edit </button>
          <button className="delete" onClick={() => onDeleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TodoList;
