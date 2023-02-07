import Task from "./Task";
import { useContext } from "react";
import Context from "../Contexts/task";
function Tasks() {
    const {state} = useContext(Context);
    return (
        <div className="tasks">
            {
                state.task.tasks.length ? <small style={{margin: '10px', fontStyle: 'italic'}}>Double click each item to toggle the completeness of a task</small> : ""
            }
            
            {
                state.task.tasks.length ? state.task.tasks.map(task => {
                    return <Task task={task} key={task.id} />
                }) : <h3 style={{marginTop: '40px', paddin: '30px'}}>No tasks found, please add</h3>
            }
        </div>
    )
}

export default Tasks;