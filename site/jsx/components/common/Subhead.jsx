import React from 'react';

class Subhead extends React.Component{

	static propTypes = {
		subheadText: React.PropTypes.string.isRequired
	}

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<p className="subhead">"{ this.props.subheadText }"</p>
			</div>
		);
	}

}

export default Subhead;
