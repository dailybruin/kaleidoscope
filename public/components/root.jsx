import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import createStore from '../redux/reducers/index'
import { Provider, connect } from 'react-redux'
import SortableComponent from './common/SortableComponent'

const store = createStore();

var mountNode = document.getElementById("react-main-mount");

// Set in the URL from /all if updating a page
var components = JSON.parse($('#app meta').attr('components'));
var database_id = JSON.parse($('#app meta').attr('database_id'));

ReactDOM.render(
	<Provider store={store}>
		<App store={store} preloaded_components={components} database_id={database_id}/>
	</Provider>, document.getElementById('app')
);




