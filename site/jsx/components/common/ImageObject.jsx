import React from 'react';

class ImageObject extends React.Component {
	
	static propTypes = {
		url: React.PropTypes.string.isRequired,
		credit: React.PropTypes.string.isRequired,
		caption: React.PropTypes.string.isRequired
	}

	render()
		return (
			<div>
				<img src="{ props.url }" /> 
				<p>Caption: { props.caption }</p>
				<p>Credit: { props.credit } </p>
			</div>
		);
	}

	constructor(props){
		super(props);
	}
}

export default ImageObject;