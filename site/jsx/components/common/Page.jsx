// import React from 'react';
import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Subhead from './Subhead';
import Image from './Image';
import Quote from './Quote';
import TextSection from './TextSection';
import DraggableList from 'react-draggable-list';
import DashboardItem from './DashboardItem'
import {connect} from 'react-redux';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import {updateComponentList} from '../../actions';
// import SortableComponent from './SortableComponent';

const SortableItem = SortableElement(({value}) => {
    return (<div className="sortable-element">{value}</div>);
});
const SortableList = SortableContainer(({items}) => {
    return (
            <div>
                {items.map((value, index) => {
                    return (<SortableItem key={`item-${index}`} index={index} value={value} />)
                    }
                )}
            </div>
        );
    });

class Page extends React.Component {
    static propTypes = {
    }
    constructor(props) {
        super(props);

       // this.deactivateDashboard = this.deactivateDashboard.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        let new_array = arrayMove(this.props.store.getState()._dashboard, oldIndex, newIndex);
        this.props.dispatch(updateComponentList(new_array));
    }

    render() {
        const dashboard = this.props.store.getState()._dashboard;
        return (
            <div className="page-container">
                <SortableList items={dashboard} onSortEnd={this.onSortEnd} pressDelay={150}/>
            </div>
        );
    }

 /*   deactivateDashboard(){
        let app = document.querySelector('.app-container');
        app.classList.add('preview');
    }*/
};

const mapStateToProps = (state) => {
	return {
		components: state._dashboard
	}
}

const ConnnectedPage = connect(mapStateToProps)(Page)

export default ConnnectedPage;
