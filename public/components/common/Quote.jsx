import React from 'react';

class Quote extends React.Component{

	static propTypes = {
		quoteText: React.PropTypes.string.isRequired,
		quoteSource: React.PropTypes.string.isRequired
	}

	constructor(props){
		super(props);
	}

	render() {
		let quoteSource = this.props.quoteSource !== undefined ? '- ' + this.props.quoteSource : '';
		return (
			<div className="center-block">
				<div className="quote-block">
					<p className="quote quote-left">&ldquo;</p>
					<div className="quote-content">
						<p className="quote-text">{ this.props.quoteText }</p>
						<p className="quote-source">{quoteSource}</p>
					</div>
					<p className="quote quote-right">&rdquo;</p>
				</div>
			</div>
		);
	}

}

export default Quote;
