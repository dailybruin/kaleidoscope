import React from 'react';

// Super basic component that takes name and age and then prints it
class Page extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        image: React.PropTypes.instanceOf(ImageObject),
        quote: React.PropTypes.instancef(QuoteObject),
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
                    Image: { this.props.image}
                    <br />
                    Quote: { this.props.quote }

                </p>
            </div>
        )
    }
};

export default Page;
