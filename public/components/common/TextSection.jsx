import React from 'react';

class TextSection extends React.Component {
	
	static propTypes = {
		text: React.PropTypes.string.isRequired
	}

	constructor(props){
		super(props);
	}

	render() {
		var text = this.props.text;
		// TODO: deal with case if url does not begin with 'http://www.'
		text = text.replace(/\[(.*?)\] \((.*?)\)/g, '<a href="$2">$1</a>');

		return (
			<div className="center-block text">
				{text.split("\n").map(paragraph => {
					return <p dangerouslySetInnerHTML={{__html: paragraph}} />;
				})}
			</div>
		);
	}

}

export default TextSection;