import { useContext, useRef, useState } from "react";
import Context from "../Contexts/task";
function AddTask() {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const nameErrorRef = useRef("");
    const { state, dispatch } = useContext(Context);

    function handelAddTask() {
        /*

        ==============================================================

        THIS IS ONE WAY TO DO THAT ....

        if(!text) {
            setError("You must enter task");
        } else {
            setError("");
            let newTask = {
                id: state.task.tasks.length + 1,
                name: text,
                added_date: new Date(),
                isCompleted: false
            }
            dispatch({
                type: 'ADD_TASK',
                payload: newTask
            });
            localStorage.setItem("tasks", JSON.stringify([newTask, ...state.task.tasks]));
            setText("");
        } 

        ================================================================
        */


        /*
        ======================================================

        if i type a text value, assigning the error value to the current
        will not run but the current value persists so
        so checking if there is no error in the current value always fails
        that is why i made the current to "" each time adding the task.

        i used ref is becuase if i used the error value in state the snapshot
        at the time of clicking may be stale. (first click)

        =========================================================
        */
        nameErrorRef.current = "";
        if(!text) {
            nameErrorRef.current = "Enter Task";
            setError("Enter task");
        }
        if(!nameErrorRef.current) {
            let newTask = {
                id: state.task.tasks.length + 1,
                name: text,
                added_date: new Date(),
                isCompleted: false
            }
            dispatch({
                type: 'ADD_TASK',
                payload: newTask
            });
            localStorage.setItem("tasks", JSON.stringify([newTask, ...state.task.tasks]));
            setError("");
            setText("");
        }
    }
    return (
        <div className="add-task">
            <input type="text" name="text" className="add-task-input" placeholder="Enter text to add ..." value={text} onChange={(e) => { setText(e.target.value) }}></input>
            <button className="add-task-button" onClick={handelAddTask}>Add Task</button>
            {error ? <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p> : ""}
        </div>
    )
}

export default AddTask;