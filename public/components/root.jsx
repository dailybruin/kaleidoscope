import React from 'react';
import App from './App'
import createStore from '../redux/reducers/index'
import { Provider } from 'react-redux'
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import SortableComponent from './common/SortableComponent'
// import {render} from 'react-dom'

const store = createStore();

var mountNode = document.getElementById("react-main-mount");

var components = JSON.parse($('#app meta').attr('components'));
var database_id = JSON.parse($('#app meta').attr('database_id'));


ReactDOM.render(
	<Provider store={store}>
		<App store={store} preloaded_components={components} database_id={database_id}/>
	</Provider>, document.getElementById('app')
);




