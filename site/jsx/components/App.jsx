import React from 'react';
import Page from './common/Page';
import Dashboard from './Dashboard';
import { Provider } from 'react-redux';

// Creates a App components that works as the base of the app.
var test_url = 'https://s-media-cache-ak0.pinimg.com/originals/14/37/10/143710e981aedc43f8091f066c645660.jpg';
class App extends React.Component {
    render() {
    	console.log('preloaded components from App.jsx' + this.props.preloaded_components);
        return (
            <div>

                <Page store={this.props.store} />
                <hr />
				<Dashboard store={this.props.store} preloaded_components={this.props.preloaded_components} componentTypes={['header', 'subhead', 'image', 'quote', 'text section']} database_id={this.props.database_id}/>             
            </div>
        )
    }
};



export default App
