import React from 'react';
import App from './components/App'
import createStore from './reducers/index'
import { Provider } from 'react-redux'
import { connect } from 'react-redux';

const store = createStore();

React.render(
	<Provider store={store}>
		<App store={store}/>
	</Provider>, document.getElementById('app')
);
