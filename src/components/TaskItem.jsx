import Button from "./Button"
import PropTypes from 'prop-types';
import stylesTaskItem from './TaskItem.module.css'

const TaskItem = ({task, updateTask, deleteTask,checked}) => {
  
    const { id, taskName, completedTask } = task;
    
    const handleChecked = (e,taskParam) => {
        checked({taskParam})
    }
  
    return (
        <li key={id} className={stylesTaskItem.list}>
            
            <div className={stylesTaskItem.container_title_checked}>
                <p>{taskName }</p>

                {
                    !completedTask &&
                        <form id='form-checked'>
                            <input 
                                type="checkbox" 
                                name="completedTask" 
                                id="completedTask"
                                onChange={(e) => { handleChecked(e,task) }} 
                                checked = {completedTask}
                            />
                        </form>
                }
                
            </div>
            
            <p>{completedTask ? 'Completed' : 'No Completed'}</p>

            <div className={stylesTaskItem.container_buttons}>
                <Button name='Update' fn={updateTask} task={task}/>
                <Button name='Delete' fn={deleteTask} task={task}/>
            </div>
        </li>
  )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    checked: PropTypes.func.isRequired
};

export default TaskItem