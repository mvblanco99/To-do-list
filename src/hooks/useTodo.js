import { useEffect, useState } from "react";

const initialState = {
    taskName : '',
    completedTask : false
}

export const useTodo = () => {
    
    const [task, setTask] = useState(initialState);
    const [tasks, setTasks] = useState([]);
    const [action,setAction] = useState('Save');

    const handleChange = (e) => {
        const newTask = {...task, taskName : e.target.value}
        setTask(newTask);
    }

    const checked = ({taskParam}) => {

        const newTask = {
            id : taskParam.id,
            taskName : taskParam.taskName,
            completedTask : !taskParam.completedTask
        }

        const newTasks = tasks.filter(param => param.id != taskParam.id);
        newTasks.push(newTask)
        setTasks(newTasks)
    }

    const saveTask = ({task}) => {
        
        //Verificamos que el input tenga contenido
        if(task.taskName.length < 1)return

        if(task.id == undefined){
            
            //Generamos una nueva tarea y asignamos el id para la tarea
            const newTask = {
                taskName : task.taskName,
                completedTask : false,
                id : Math.floor(Math.random() * 100)
            }

            const newTasks = [...tasks, newTask];

            //Guardamos la tarea
            setTasks(newTasks);
        }else{
            
            const newTask = {
                taskName : task.taskName,
                completedTask : task.completedTask,
                id : task.id
            }

            const newTasks = tasks.filter(param => param.id != task.id);
            newTasks.push(newTask)
            setTasks(newTasks)
        }
        
    }

    const updateTask = ({task}) => {
        const newTask = {...task};
        setTask(newTask)
        setAction('Update')
    }

    const deleteTask = ({task}) => {
        const newTasks = tasks.filter(param => param.id != task.id);
        setTasks(newTasks)
    }

    const resetTask = () => {
        setTask(initialState)
        setAction('Save')
    }

    useEffect(()=>{
        const dataLocalStorage = localStorage.getItem('tasks');
        const newTasks = dataLocalStorage != null ? JSON.parse(dataLocalStorage) : [];
        setTasks(newTasks);
        
    },[])

    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks));
        resetTask()
    },[tasks])

    return {saveTask, updateTask, deleteTask, handleChange, checked, tasks, task, action}
}