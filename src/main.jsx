import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './TodoForm.css'
import './TodoList.css'
// import TodoForm from './TodoForm.jsx'
// import TodoList from './TodoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <TodoForm/>
    <TodoList/> */}
  </React.StrictMode>,
)
