import './App.css';
import { useReducer } from 'react';
import reducer from './reducers/task';
import Context from './Contexts/task';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import DeleteModal from './components/DeleteModal';
function App() {
  /**
   * The state must be lifted to the common parent inorder to serve
   * state to all its child componenets without any doubt.  state do not
   * always live at the top or bottom but has source of truth.
   * 
   * but now the states are served from useReducer hook from app 
   * componenet which will
   * be mutated when the child componenet dispatch action.
   * 
   * but inorder to avoid the state and functions to be passed to child 
   * componenets [prop drilling] serve state and dispatch 
   * from the context that make your component more clean
   * 
   */

  const initialState = {
    task: {
      tasks: JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [],
      task: {},
      modal: {
        isDeleteModalOpen: false,
        isAddModalOpen: false
      } 
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  
  /**
   * =======================
   * perhapys you may not need an effect
   * 
   * useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.task.tasks));

  }, [state.task.tasks])
   * 
   * ======================
   */
  return (
    <Context.Provider value={{state, dispatch}}>
      <div className="App">
        <AddTask/>
        <Tasks/>
        {
          state.task.modal.isDeleteModalOpen && <DeleteModal/>
        }
      </div>
    </Context.Provider>
  );
}

export default App;
