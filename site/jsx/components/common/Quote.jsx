import React from 'react';

class Quote extends React.Component{

	static propTypes = {
		quote: React.PropTypes.string.isRequired,
		quoteMaker: React.PropTypes.string.isRequired
	}

	constructor(props){
		super(props);
	}

	render(){

		return(
			<div className="quote-wrapper" style={quoteStyle}>
				<p className="quote-content">&ldquo;{ this.props.quote }&rdquo;
</p>
				<p className="quote-by">- { this.props.quoteMaker }</p>
			</div>
		);
	}

}

var quoteStyle = {
	width: '400px',
	textAlign: 'center'
};

export default Quote;
