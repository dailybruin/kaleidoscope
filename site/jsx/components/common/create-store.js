import {createStore, combineReducers }from 'redux';
import * as reducers from './reducers'


// let store_0 = createStore(reducer);

// store_0.dispatch({
//     type: 'ADD_NEW_COMPONENT',
// })

// store_0.dispatch({
//     type: 'ADD_IMAGE',
// })



export default function () {
    var reducer = combineReducers(reducers)
    var store = createStore(reducer);
    console.log('inside store function for app.jsx')
    return store;
}
