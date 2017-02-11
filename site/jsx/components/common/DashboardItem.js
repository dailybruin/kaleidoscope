import React from 'react';

export default class DashboardItem extends React.Component {
	static propTypes = {
		component: React.PropTypes.element.isRequired,
		type: React.PropTypes.string.isRequired,
		database_id: React.PropTypes.string.isRequired,
		button: React.PropTypes.element.isRequired,
	}

	constructor(props){
		super(props);
		this.state = {
			value: 0,
		}
	}

	render() {
		const {item, itemSelected, dragHandle} = this.props;
		return (
				<div>
					{this.props.component}
					{this.props.button}
				</div>
			)
		}

	}
}