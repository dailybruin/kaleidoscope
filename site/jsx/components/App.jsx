import React from 'react';
import Page from './common/Page';
import Dashboard from './Dashboard';


// Creates a App components that works as the base of the app.
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
				<Page title="Article 1" author="John Smith" />
				<hr />
				<Dashboard componentTypes={['image', 'title', 'cover image', 'author', 'quote', 'text section']} />             
            </div>
        )
    }
};

export default App;
