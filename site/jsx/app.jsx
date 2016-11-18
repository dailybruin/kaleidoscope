import React from 'react'
import App from './components/App'
import createStore from './components/common/create-store'
import {Provider } from 'react-redux'
import { connect} from 'react-redux';


const store = createStore();
console.log('what store looks like in app.jsx');
console.log(store);

// Create app component and put it div#app. This initializes React.
// React.render(
// 		<Provider store={store}>
// 		<App store={store}/>, document.getElementById('app')
// 		</Provider>
// );

React.render(
		<Provider store={store}>
		<App store={store}/>
		</Provider>, document.getElementById('app')
);
