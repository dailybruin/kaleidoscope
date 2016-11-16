import React from 'react';
import ImageObject from './ImageObject';
import QuoteObject from './QuoteObject';
import {connect} from 'react-redux';

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
        // if (props.store === null) {
        // 	this.setState({success:"nah"});
        // }
        // else 
        // 	this.setState({success:"YAS"});
    }
    render() {
        return (
            <div className="Page">
                <p>
                	<br />
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

const mapStateToProps = (state) => {
	console.log('called mapStateToProps from Page Component');
	console.log(state);
	return {
		src:"https://img.ifcdn.com/images/14f59b1caa7b63fac65ccc186dcd6f555bb1a11893e9ac273dd09339796efe82_3.jpg",
		caption: "N/A",
		credit: "None"
	}
}

const ConnnectedPage = connect(mapStateToProps)(Page)

export default ConnnectedPage;
