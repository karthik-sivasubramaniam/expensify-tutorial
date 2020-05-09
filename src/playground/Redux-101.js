/*
This file has nothing to do with the app. It's part of the tutorial that teaches some basic Redux features.
*/

import React from 'react';
import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + (action.incrementBy || 1)};
        // Never dispatch INCREMENT with a IncrementBy value of 0. It's a falsy value and will default to 1.
        case 'DECREMENT':
        // Never dispatch DECREMENT with a decrementBy value of 0. It's a falsy value and will default to 1.
            return {count: state.count - (action.decrementBy || 1)};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    };
});

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 3
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});

store.dispatch({
    type: 'RESET'
})
