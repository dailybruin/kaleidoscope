import React from 'react';
import Page from './common/Page';
import Dashboard from './Dashboard';

import { Provider } from 'react-redux';

// currently keep track of one thing which is componnent rendering 
// TODO move these redux parts to another js file 

// Creates a App components that works as the base of the app.
var test_url = 'https://s-media-cache-ak0.pinimg.com/originals/14/37/10/143710e981aedc43f8091f066c645660.jpg';
class App extends React.Component {
    render() {
        return (
            	<div>
            		<img src={test_url}/>
					<Page title="Article 1" author="Jason Jiang" />
					<hr />
					<Dashboard store={this.props.store} componentTypes={['image', 'title', 'cover image', 'author', 'quote', 'text section']} />             
            	</div>
        )
    }
};



export default App
