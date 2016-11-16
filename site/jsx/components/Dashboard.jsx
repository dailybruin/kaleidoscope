import React from 'react';
import {connect} from 'react-redux';



var addImage = function (src, credit, caption) {
    return {
        type: 'ADD_IMAGE',
        src: src,
        credit: credit,
        caption: caption,
    }
}

class Dashboard extends React.Component {
    static propTypes = {
        componentTypes: React.PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {selectedComponent: this.props.componentTypes[0]};
        // add syntatic sugar () => {} to prevent exessive bind calls 
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        var componentOptions = this.props.componentTypes.map(function(type, i){
          return (
            <option value={type.replace(/\s/g , "_")}>{type}</option>
          );
        });

        return (
          <div className="Dashboard">
            <form onSubmit={this.handleSubmit}>
                <div className='component-inputs'>
                    {this.showInputForComponentType(this.state.selectedComponent)}
                </div>
                <br/>
                <select value={this.state.selectedComponent} onChange={this.handleDropdownChange}>
                    {componentOptions}
                </select>
                <input type='submit'></input>
            </form>
          </div>
        );
    }

    handleDropdownChange(event) {
        this.setState({selectedComponent: event.target.value});
        // {this.showInputForComponentType(event.target.value)}
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.selectedComponent);
        event.preventDefault();
        console.log(event);
        $.ajax({
          url: '/store',
          dataType: 'json',
          type: 'POST'
        });
    }

    showInputForComponentType(componentType) {
        console.log('Dropdown changed: ' + componentType);
        switch(componentType) {
            case 'title':
                return(
                    <div><input placeholder="Title" type="text" name="title" className="form-control"/></div>
                );
                break;
            case 'author':
                return(
                    <div><input placeholder="Author" type="text" name="author" required="required" className="form-control"/></div>
                );
                break;
            case 'image':
                return(
                    <div>
                        <input placeholder="URL" type="text" name="url" className="form-control"/>
                        <input placeholder="Credit" type="text" name="credit" className="form-control"/>
                        <input placeholder="Caption" type="text" name="caption" className="form-control"/>
                    </div>
                );
                break;
            case 'quote':
                return(
                    <div>
                        <input placeholder="Quote" type="text" name="quote" className="form-control"/>
                        <input placeholder="Quote Maker" type="text" name="quoteMaker" className="form-control"/>
                    </div>
                );
                break;
            case 'text_section':
                return(
                    <div><textarea name="text" cols="90" rows="8"></textarea></div>
                );
                break;
            default:
                return(<p>nothing</p>);
                break;
        }
    }
};

var mapStateToProps = (props) => {
    return {
        src:"",
        caption: "none",
        credit: "N/A"
    }
}

var ConnectedDashboard = connect(mapStateToProps)(Dashboard)

export default ConnectedDashboard;

// currently keep track of one thing which is componnent rendering 


// var dashboard_reducer = function(state = [], action) {
//     console.log("intialized an empty array for state");
//     switch (action.type) {
//         case 'ADD_NEW_COMPONENT':
//             return {
//                 ...state,
//                 message: action.value
//             }
//         default:
//             return state;
//     }
// }

// var page_reducer = function(state = [], action) {
//     switch (action.type){
//         default:
//             return state;
//     }
// }

// var reducer = combineReducers({
//     dashboard: dashboard_reducer,
//     page: page_reducer,
// })

// let store_0 = createStore(reducer);

// store_0.dispatch({
//     type: 'ADD_NEW_COMPONENT',
// })

// store_0.dispatch({
//     type: 'ADD_IMAGE',
// })

// var addImage = function (src, credit, caption) {
//     return {
//         type: 'ADD_IMAGE',
//         src: src,
//         credit: credit,
//         caption: caption,
//     }
// }

// var addNewComponent = function (component) {
//     return{
//         type: 'ADD_NEW_COMPONENT',
//         component: component
//     }
// }
// var test_url = 'https://s-media-cache-ak0.pinimg.com/originals/14/37/10/143710e981aedc43f8091f066c645660.jpg';
// var test_credit = 'TEH INTERNET';
// var test_caption = 'Can I haz cupcake?';
// console.log(store_0.dispatch(addImage(test_url,test_credit,test_caption)));
