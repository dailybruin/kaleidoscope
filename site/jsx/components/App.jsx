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
				<Page   store={this.props.store} 
                        title="Article 1"
                        authors={["John Smith"]}

                        coverPhoto={ [{
                            url : 'http://images.fonearena.com/blog/wp-content/uploads/2013/11/Lenovo-p780-camera-sample-10.jpg',
                            credit : 'http://images.fonearena.com/',
                            caption : 'caption'
                        }]}

                        subheading="This is subheading text"

                        quotes={ [{
                            quote: 'Hawaii will always be my favorite place on Earth. No matter how special anywhere else I go is ... Hawaii is the place of my ancestors and my people.',
                            quoteMaker:'Micah Ma’a'
                        }] }

                        sideImages={[{
                            url : 'http://dailybruin.com/images/2016/11/web.ae_.heramb.WH_-640x426.jpg',
                            credit : 'Wesley Hardin/Daily Bruin',
                            caption : 'Second-year biology student Cole Heramb created both the artwork and the music for his album "Red EP." '
                        }]}/>
				<hr />
				<Dashboard store={this.props.store} componentTypes={['image', 'title', 'cover image', 'author', 'quote', 'text section']} />             
            </div>
        )
    }
};



export default App
