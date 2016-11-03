import React from 'react';
import User from './common/User';
import Page from './common/Page';

// Creates a App components that works as the base of the app.
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
				<Page title="Article 1" author="John Smith" />                
            </div>
        )
    }
};

export default App;
