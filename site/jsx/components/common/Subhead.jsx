import React from 'react';

class Subhead extends React.Component{

	static propTypes = {
		text: React.PropTypes.string.isRequired
	}

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<p className="subhead">{ this.props.text }</p>
			</div>
		);
	}

}

export default Subhead;