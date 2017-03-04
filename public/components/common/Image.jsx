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
				<div className="img-block" style={{backgroundImage:'url(' + this.props.url + ')'}}>
				</div>
				<p className="img-caption">{ this.props.caption }</p>
				<p className="img-credit">Photo by { this.props.credit } </p>
				<hr />
			</div>
		);
	}

}

export default Image;