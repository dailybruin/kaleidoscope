import React from 'react';
import App from './components/App'
import createStore from './reducers/index'
import { Provider } from 'react-redux'
import { connect } from 'react-redux';

const store = createStore();

var components = JSON.parse($('#app meta').attr('components'));
// console.log(components);

React.render(
	<Provider store={store}>
		<App store={store} preloaded_components={components}/>
	</Provider>, document.getElementById('app')
);
