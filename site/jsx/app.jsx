import React from 'react';
import App from './components/App'
import createStore from './reducers/index'
import { Provider } from 'react-redux'
import { connect } from 'react-redux';

const store = createStore();

var components = JSON.parse($('#app meta').attr('components'));
var database_id = JSON.parse($('#app meta').attr('database_id'));
console.log('database_id ' + database_id);

React.render(
	<Provider store={store}>
		<App store={store} preloaded_components={components} database_id={database_id}/>
	</Provider>, document.getElementById('app')
);
