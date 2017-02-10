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
			<div className="center-block">
				<p className="subhead">{ this.props.text }</p>
			</div>
		);
	}

}

export default Subhead;
