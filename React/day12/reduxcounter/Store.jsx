import { createStore } from 'redux';

// Initial State
const initialState = {
    counter: 0,
};

// Reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};


// Create Store
const store = createStore(counterReducer);

export default store;
