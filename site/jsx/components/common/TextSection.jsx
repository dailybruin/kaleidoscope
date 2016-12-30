import React from 'react';

class TextSection extends React.Component {

 	static propTypes = {
		text: React.PropTypes.string.isRequired
	}
 
 	constructor(props){
 		super(props);
 	}
 
	render(){
 		return (
			<p>{this.props.text}</p>
		);
	}

}

export default TextSection;