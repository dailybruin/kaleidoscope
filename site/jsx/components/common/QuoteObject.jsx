import React from 'react';

class QuoteObject extends React.Component{

	static propTypes = {
		quote: React.PropTypes.string.isRequired,
		quoteMaker: React.PropTypes.string.isRequired
	}

	render()
		return (
			<div>
				<p>"{ props.quote }"</p>
				<p>-{ props.quoteMaker }</p>
			</div>
		);
	}

	constructor(props){
		super(props);
	}

}

export default QuoteObject;
