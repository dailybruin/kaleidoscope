import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import App from './components/App'
// import createStore from './components/common/create-store'
import createStore from './reducers/index'
import { Provider } from 'react-redux'
import { connect} from 'react-redux';

const store = createStore();
// console.log('what store looks like in app.jsx');
// console.log(store);

//why does ReactDOM.render() not work?
/*
React.render(
		<Provider store={store}>
			<App store={store}/>
		</Provider>, document.getElementById('app')
);
*/


module.exports = function render(locals, callback) {
	const html = ReactDOMServer.renderToStaticMarkup(
  		<Provider store={store}>
			<App store={store}/>
		</Provider>
	);
	callback(null, '<!DOCTYPE html><html>' + html + '</html>');
}