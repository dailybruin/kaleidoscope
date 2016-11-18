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
        console.log(this.props);
        var check = this.props.store.getState()._dashboard.caption;
        if (check=== null || check === undefined) {
        	console.log(this.props.store.getState()._dashboard)
        	console.log('nah');
        	this.state={success:"nah"};
        }
        else {
        	console.log(this.props.store.getState()._dashboard)
        	console.log('yah');
        	this.state={success:"YAS"};
        }

    }
    render() {
    	let caption = "";
    	let src = "";
    	let credit ="";
    	var check1 = this.props.store.getState()._dashboard;
    	if (check1.caption !== undefined && check1.caption !== null){
    		 caption= check1.caption;
    		 credit = check1.credit;
    		 src = check1.src;
    	}
        return (
            <div className="Page">
                <p>
                	{src}
                	{caption}
                	{credit}
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
		caption: state._dashboard.caption,
		credit: state._dashboard.credit,
		src: state._dashboard.src,
	}
}

const ConnnectedPage = connect(mapStateToProps)(Page)

export default ConnnectedPage;
