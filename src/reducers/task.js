const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                task: {
                    ...state.task, tasks: [action.payload, ...state.task.tasks]
                }
            }
        
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                task: {
                    ...state.task, tasks: state.task.tasks.map(task => {
                        if(task.id === action.payload.id) {
                            return {...task, isCompleted: !task.isCompleted}
                        } else {
                            return task
                        }
                    })
                }
            };
        case 'DELETE_TASK':
            return {
                ...state,
                task: {
                    ...state.task, tasks: state.task.tasks.filter(task => {
                        return task.id !== action.payload
                    })
                }

            }
        case 'OPEN_DELETE_MODAL':
            return {
                ...state,
                task: {
                    ...state.task, modal: {
                        ...state.task.modal, isDeleteModalOpen: action.payload
                    }
                }
            }
        case 'CLOSE_DELETE_MODAL':
            return {
                ...state,
                task: {
                    ...state.task, modal: {
                        ...state.task.modal, isDeleteModalOpen: action.payload
                    }
                }    
            }
        case 'SET_CURRENT_TASK':
            return {
                ...state,
                task: {
                    ...state.task, task: action.payload
                }
            }
        default:
            return state;
    }
}

export default reducer;