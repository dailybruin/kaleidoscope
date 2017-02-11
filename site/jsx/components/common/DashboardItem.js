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
		this.state = {
			value: 0,
		}
	}
	_inc() {
	  this.setState({
	    value: this.state.value+1
	  });
	}
	getDragHeight() {
	  return 200;;
	}
	render() {
		// const {item, itemSelected, dragHandle} = this.props;
		// const component_props = item._store.props;
		// const {value} = this.state;
		// const scale = itemSelected * 0.05 + 1;
		// const shadow = itemSelected * 15 + 1;
		// const dragged = itemSelected !== 0;
		// console.log("checking out props of DashboardItem");
		// // console.log(component_props._store.props);
		// console.log("*********");
		// return (
		// 		<div 
		// 			className={cx('item', {dragged})}
		// 			style={{
		// 				transform: `scale(${scale})`,
		// 				boxShadow: `rgba(0, 0, 0, 0.3) 0px ${shadow}px ${2 * shadow}px 0px`
		// 			}}
		// 		>
		// 			{dragHandle(<div className="dragHandle" />)}
		// 			{component_props.component}
		// 			{component_props.button}
		// 			{' '}<input type="button" value={value} onClick={() => this._inc()} />
		// 		</div>
		// 	);
		return (
			<div>
				{this.props.component}
				{this.props.button}
			</div>
		);
	}

}
