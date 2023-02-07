import Context from "../Contexts/task";
import { useContext } from "react";
function DeleteModal() {
    const {state, dispatch} = useContext(Context);
    const handelCancel = () => {
        dispatch({
            type: 'CLOSE_DELETE_MODAL',
            payload: false
        });
        
    }

    const handelDelete = () => {
        dispatch({
            type: 'DELETE_TASK',
            payload: state.task.task.id
        });
        const newTasForLocalStorage = state.task.tasks.filter(task => {
            return task.id !== state.task.task.id
        });
        localStorage.setItem("tasks", JSON.stringify(newTasForLocalStorage));
        dispatch({
            type: 'CLOSE_DELETE_MODAL',
            payload: false
        });
    }
    return (
        <div className="delete-modal">
            <div className="delete-modal-content">
                <p>Do you want to delete task <span style={{fontWeight: 'bold'}}>{state.task.task.name}</span> ? </p>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <button className="modal-button" onClick={handelDelete}>Yes</button>
                    <button className="modal-button" onClick={handelCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default DeleteModal;