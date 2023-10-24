import TaskItem from "./TaskItem"
import PropTypes from 'prop-types';
import stylesTaskList from './TaskList.module.css'

const TaskList = ({tasks, updateTask, deleteTask, checked}) => {
    
    return (
        <div className={stylesTaskList.container_list}>
            <h2>Task List</h2>
            <ul>
                {tasks.length > 0 &&
                    tasks.map(task => (
                        <TaskItem 
                            key={task.id} 
                            task={task} 
                            updateTask={updateTask} 
                            deleteTask={deleteTask} 
                            checked={checked}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    checked: PropTypes.func.isRequired
};

export default TaskList