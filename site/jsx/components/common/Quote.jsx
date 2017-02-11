import React from 'react';

class Quote extends React.Component{

	static propTypes = {
		quoteText: React.PropTypes.string.isRequired,
		quoteSource: React.PropTypes.string.isRequired
	}

	constructor(props){
		super(props);
	}

	render(){
		// let test_head =

		return (
			<div>


				<p className="quote">"{ this.props.quoteText }"</p>
				<p className="quoteSource">- { this.props.quoteSource }</p>
			</div>
		);
	}

}

export default Quote;
