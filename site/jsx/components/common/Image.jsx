import React from 'react';

class Image extends React.Component {
	
	static propTypes = {
		url: React.PropTypes.string.isRequired,
		credit: React.PropTypes.string.isRequired,
		caption: React.PropTypes.string.isRequired
	}

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="center-block image">
				<div className="img-block">
					<img src={ this.props.url } /> 
					<p className="img-credit">Credit: { this.props.credit } </p>
				</div>
				<p className="img-caption">Caption: { this.props.caption }</p>
			</div>
		);
	}

}

export default Image;