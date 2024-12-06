// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creators
export const increment = () => {
    return { type: INCREMENT };
};

export const decrement = () => {
    return { type: DECREMENT };
};
