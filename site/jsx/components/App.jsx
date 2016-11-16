import React from 'react';
import Page from './common/Page';
import Dashboard from './Dashboard';


// Creates a App components that works as the base of the app.
class App extends React.Component {
    render() {
        return (
            <div>
				<Page   title="Article 1"
                        author="John Smith"
                        quote={ [{'quote': 'inspirational BS', 'quoteMaker':'John Smith'}] }
                        image={ [{'url' : 'http://dailybruin.com/images/2016/11/web.ae_.heramb.WH_-640x426.jpg', 'credit' : 'Wesley Hardin/Daily Bruin', 'caption' : 'Second-year biology student Cole Heramb created both the artwork and the music for his album "Red EP." '}] }/>
				<hr />
				<Dashboard componentTypes={['image', 'title', 'cover image', 'author', 'quote', 'text section']} />             
            </div>
        )
    }
};

export default App;
