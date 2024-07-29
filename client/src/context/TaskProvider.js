import React,{useContext,useState} from "react";
import axios from "axios";

const baseUrl = "http://localhost:3000/api";

const TaskContext = React.createContext();

const TaskProvider = ({children}) => {
    const [tasks,setTasks] = useState([]);

    const getAllTasks = async () => {
        const response = await axios.get(`${baseUrl}`);
        console.log(response.data);
        setTasks(response.data);
    }

    const addTask = (task) => {

       // need to add api call 
        setTasks([...task]);
    }

const deleteTask = (task) => {
   // need to add api call
   setTasks(task.filter(item => item.id !== task.id));
}

const updateTask = (index,task) => {
  // need to add api call
  tasks[index]=task
  setTasks(task);
}

    return ( 
        <TaskContext.Provider value={{tasks,getAllTasks,addTask,deleteTask,updateTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;