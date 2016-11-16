import React from 'react';

class QuoteObject extends React.Component{

	static propTypes = {
		quote: React.PropTypes.string.isRequired,
		quoteMaker: React.PropTypes.string.isRequired
	}

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<p className="quote">"{ this.props.quote }"</p>
				<p>-{ this.props.quoteMaker }</p>
			</div>
		);
	}

}

export default QuoteObject;
