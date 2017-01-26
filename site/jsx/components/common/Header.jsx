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
			<div className="header">
				<h1 className="title">{ this.props.title }</h1>
				<h3 className="author">By { this.props.author }</h3>
				<img className="image" src={ this.props.image }/>
			</div>
		);
	}

}

export default Header;