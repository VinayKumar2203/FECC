// Action Types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators
export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id,
});
