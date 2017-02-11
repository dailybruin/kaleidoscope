import React from 'react';
import Header from './Header';
import Subhead from './Subhead';
import Image from './Image';
import Quote from './Quote';
import TextSection from './TextSection';
import DraggableList from 'react-draggable-list';
import DashboardItem from './DashboardItem'
import {connect} from 'react-redux';
// import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import SortableComponent from './SortableComponent';


// const SortableItem = SortableElement(({value}) => 
//         (<div>
//             {value.component}
//             {value.button}
//         </div>)
//     );

// const SortableItem = SortableElement(({value}) => {
//     console.log('In sortable item')
//     console.log(value); 
//     return (<div>{value}</div>);
// });
// const SortableList = SortableContainer(({items}) => {
//     console.log('666666666')
//     console.log(items);
//     return (
//             <div>
//                 {items.map((value, index) => {
//                     console.log('checking value')
//                     console.log(index)
//                     console.log(value._store.props.component);
//                     return (<SortableItem key={`item-${index}`} index={index} value={index} />)
//                     }
//                     )}
//             </div>
//         );
//     });
// const SortableItem = SortableElement(({value}) => <li>{value}</li>);

// const SortableList = SortableContainer(({items}) => {
//     return (
//         <ul>
//             {items.map((value, index) =>
//                 <SortableItem key={`item-${index}`} index={index} value={index} />
//             )}
//         </ul>
//     );
// });
// Super basic component that takes name and age and then prints it
class Page extends React.Component {
    static propTypes = {
        // title: React.PropTypes.string.isRequired,
        // author: React.PropTypes.string.isRequired,
        // image: React.PropTypes.array.isRequired,
        // quote: React.PropTypes.array.isRequired,
        // text: React.PropTypes.string,
    }
    constructor(props) {
        super(props);
        // let drag_list = []
        this.state = {list: []};
    }
    _onListChange(newList: Array<Object>) {
      this.setState({list: newList});
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        arrayMove(this.props.store.getState()._dashboard, oldIndex, newIndex);
    }
    render() {
        // Show only the component. Don't show database_id that is saved in the store
        let redux_store = this.props.store.getState()._dashboard;
        var num_components = redux_store.length;
        // var components = [];
        for (var i = 0; i < num_components; i++) {
            // components.push(redux_store[i].component);
            // if (redux_store[i].button !== undefined)
            //     components.push(redux_store[i].button);
            // console.log(redux_store[i])
            // this.state.list.push(<DashboardItem
            //         component={redux_store[i].component}
            //         database_id={redux_store[i].database_id}
            //         type={redux_store[i].type}
            //         button={redux_store[i].button}
            //         />
            //     );

        }

        console.log(this.state);

        // return (
        //     <div className="page-container">
        //         {components}
        //     </div>
        // );
        console.log('Looking at drag_list')
        // console.log(drag_list)
        const dashboard = this.props.store.getState()._dashboard;
        console.log('99999999999');
        console.log(dashboard);
        if (dashboard.length === 0) {
            return (
                    <p>nothing</p>
                )
        }
        // return (
        //     <div className="page-container">
        //         <SortableList items={dashboard} onSortEnd={this.onSortEnd}/>
        //     </div>
        // );
        return (
                <SortableComponent/>
            );
    }
};

const mapStateToProps = (state) => {
	return {
		components: state._dashboard
	}
}

const ConnnectedPage = connect(mapStateToProps)(Page)

export default ConnnectedPage;
