import { createStore } from 'redux';

// Initial State
const initialState = {
    todos: [], // Array to store the list of todos
};

// Reducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'DELETE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, status: !todo.status } : todo
                ),
            };
        default:
            return state;
    }
};


// Create Store
const store = createStore(todoReducer);

export default store;
