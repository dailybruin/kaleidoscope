import React from 'react';
import cx from 'classnames'

export default class DashboardItem extends React.Component {
	static propTypes = {
		component: React.PropTypes.element.isRequired,
		type: React.PropTypes.string.isRequired,
		database_id: React.PropTypes.string.isRequired,
		button: React.PropTypes.element.isRequired,
	}

	constructor(props){
		super(props);
	}

	getDragHeight() {
	  return 200;;
	}
	
	render() {
		return (
			<div className="component-container">
				{this.props.component}
				{this.props.button}
			</div>
		);
	}

}
