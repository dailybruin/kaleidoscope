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
				<div className="img-credit-block">
					<img className="img-block" src={this.props.url} />
					<div className="img-credit"><span className="glyphicon glyphicon-camera"></span>{this.props.credit}</div>
				</div>
				<p className="img-caption">{ this.props.caption }</p>
			</div>
		);
	}

}

export default Image;