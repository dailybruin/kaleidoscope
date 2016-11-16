import React from 'react';
import ImageObject from './ImageObject';
import QuoteObject from './QuoteObject';

// Super basic component that takes name and age and then prints it
class Page extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        image: React.PropTypes.array.isRequired,
        quote: React.PropTypes.array.isRequired,
        text: React.PropTypes.string
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Page">
                <p>
                    Title: { this.props.title }
                    <br />
                    Author: { this.props.author }

                    <br />
                    Quote: { this.props.quote.map(function(qo){
                            return <QuoteObject quote={qo['quote']} quoteMaker={qo['quoteMaker']} />;
                        })
                    }

                    <br />
                    Image: { this.props.image.map(function(im){
                            return <ImageObject url={im['url']} credit={im['credit']} caption={im['caption']}/>;
                        })
                    }

                </p>
            </div>
        );
    }
};

export default Page;
