import React from 'react';

class Header extends React.Component{

	static propTypes = {
		title: React.PropTypes.string.isRequired,
		author: React.PropTypes.string.isRequired,
		image: React.PropTypes.string.isRequired
	}

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<h1 className="header">{ this.props.title }</h1>
				<h3 className="header">By { this.props.author }</h3>
				<img src={ this.props.image }/>
			</div>
		);
	}

}

export default Header;