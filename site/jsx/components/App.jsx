import React from 'react';
import Page from './common/Page';
import Dashboard from './Dashboard';


// Creates a App components that works as the base of the app.
class App extends React.Component {
    render() {
        return (
            <div>
				<Page   title="Article 1"
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
				<Dashboard componentTypes={['image', 'title', 'cover image', 'author', 'quote', 'text section']} />             
            </div>
        )
    }
};

export default App;
