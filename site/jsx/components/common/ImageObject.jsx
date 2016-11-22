import React from 'react';

class ImageObject extends React.Component {
	
	static propTypes = {
		url: React.PropTypes.string.isRequired,
		credit: React.PropTypes.string.isRequired,
		caption: React.PropTypes.string.isRequired,
	}

	constructor(props){
		super(props);
	}	

	render(){
		var imageStyle = {
			backgroundImage: 'url(' + this.props.url + ')'
		};

		return (
			<div style={imageStyle}>
				<p className="img-caption">Caption: { this.props.caption }</p>
				<p>Credit: { this.props.credit } </p>
			</div>
		);
	}

}



export default ImageObject;