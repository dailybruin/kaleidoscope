import React from 'react';
import Page from './common/Page';
import Dashboard from './Dashboard';

import {createStore, combineReducers }from 'redux';

// currently keep track of one thing which is componnent rendering 
// TODO move these redux parts to another js file 

const dashboard_reducer = function(state = [], action) {
    console.log("intialized an empty array for state");
    switch (action.type) {
        case 'ADD_NEW_COMPONENT':
            return {
                ...state,
                message: action.value
            }
        case 'ADD_IMAGE' :
        	
        	return {
        		Object.assign({}, state, {
        			items: action
        		})
        	}
        default:
            return state;
    }
}

const page_reducer = function(state = [], action) {
    switch (action.type){
        default:
            return state;
    }
}

const reducer = combineReducers({
    dashboard: dashboard_reducer,
    page: page_reducer,
})

let store_0 = createStore(reducer);

store_0.dispatch({
    type: 'ADD_NEW_COMPONENT',
})

store_0.dispatch({
    type: 'ADD_IMAGE',
})

const addImage = function (src, credit, caption) {
    return {
        type: 'ADD_IMAGE',
        src: src,
        credit: credit,
        caption: caption,
    }
}

const addNewComponent = function (component) {
    return{
        type: 'ADD_NEW_COMPONENT',
        component: component
    }
}

const test_url = 'https://s-media-cache-ak0.pinimg.com/originals/14/37/10/143710e981aedc43f8091f066c645660.jpg';
const test_credit = 'TEH INTERNET';
const test_caption = 'Can I haz cupcake?';
console.log(store_0.dispatch(addImage(test_url,test_credit,test_caption)));

// Creates a App components that works as the base of the app.
class App extends React.Component {
    render() {
        return (
            <div>
				<Page title="Article 1" author="Jason Jiang" />
				<hr />
				<Dashboard componentTypes={['image', 'header', 'subhead', 'quote', 'text section']} />             
            </div>
        )
    }
};

export default App;
