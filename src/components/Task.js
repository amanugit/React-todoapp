import Context from "../Contexts/task";
import { useContext } from "react";
function Task({task}) {
    const {state, dispatch} = useContext(Context);
    function handelDeleteTask(task) {
        dispatch({
            type: 'OPEN_DELETE_MODAL',
            payload: true
        });
        dispatch({
            type: 'SET_CURRENT_TASK',
            payload: task
        });
    }

    function handelToggleComplete(task) {
        dispatch({
            type: 'TOGGLE_COMPLETE',
            payload: task
        });

        const newTaskForLocalStorage = state.task.tasks.map(tsk => {
            if(task.id === tsk.id) {
                return {...tsk, isCompleted: !tsk.isCompleted}
            } else {
                return tsk
            }
        });
        localStorage.setItem("tasks", JSON.stringify(newTaskForLocalStorage));
    }
    return (
        <div className="task" onDoubleClick={() => { handelToggleComplete(task)}}>
            <h3>{task.name}</h3>
            <p>{`${new Date(task.added_date).getDay()}/${new Date(task.added_date).getMonth() + 1}/${new Date(task.added_date).getFullYear()}`}</p>
            <p style={{fontStyle: 'italic'}} className={task.isCompleted ? 'completed': 'not-completed'}>{task.isCompleted ? 'Completed': 'Pending'}</p>
            <button className="delete-task" onClick={() => {handelDeleteTask(task)}}>Delete</button>
        </div>
    )
}
export default Task;