import TaskList from './components/TaskList';
import { useTodo } from './hooks/useTodo'
import stylesApp from './App.module.css'

function App() {

  const{ saveTask, updateTask, deleteTask,handleChange, checked ,tasks, task, action } = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault();
        saveTask({task})
    }

  return (
    <>
      <div className={stylesApp.container_app}>

        <h1>TO DO LIST</h1>

        <div className={stylesApp.container_form}>
            <h2>New Task</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="taskName">
                  <input 
                      type="text" 
                      name="taskName" 
                      id="taskName"
                      value={task.taskName}
                      onChange={handleChange}
                      className={stylesApp.input_text}
                      placeholder='Leer 10 minutos'
                  />
                </label><br />
                
                <input type="submit" value={action} className={stylesApp.input}/>
            </form>
        </div>

        <TaskList 
          tasks={tasks} 
          updateTask={updateTask} 
          deleteTask={deleteTask} 
          checked={checked}
        />
      
      </div>
      
    </>
  )
}

export default App
