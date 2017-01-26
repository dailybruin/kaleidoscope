import React from 'react';

class TextSection extends React.Component {
	
	static propTypes = {
		text: React.PropTypes.string.isRequired
	}

	constructor(props){
		super(props);
	}

	render(){
		var text = this.props.text;
		return (
			<div className="text">
				{text.split("\n").map(i => {
					return <p>{i}</p>;
				})}
			</div>
		);
	}

}

export default TextSection;