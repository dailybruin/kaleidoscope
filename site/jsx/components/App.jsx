import React from 'react';
import Page from './common/Page';
import Dashboard from './Dashboard';

import { Provider } from 'react-redux';

// Creates a App components that works as the base of the app.
var test_url = 'https://s-media-cache-ak0.pinimg.com/originals/14/37/10/143710e981aedc43f8091f066c645660.jpg';
class App extends React.Component {
    render() {
        return (
            <div>
                <Page
                    store={this.props.store}
                    title=""
                    author=""
                    quote={[]}
                    image={[]}/>
                <hr />
				<Dashboard store={this.props.store} componentTypes={['header', 'subhead', 'image', 'quote', 'text section']} />             
            </div>
        )
    }
};



export default App
