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
        // add syntatic sugar () => {} to prevent exessive bind calls 
        this.state = {  data: {
                            type: this.props.componentTypes[0]
                        }
                     };
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
                    {this.showInputForComponentType(this.state.data.type)}
                </div>
                <br/>
                <select value={this.state.data.type} onChange={this.handleDropdownChange}>
                    {componentOptions}
                </select>
                <input type='submit'></input>
            </form>
          </div>
        );
    }

    handleDropdownChange(event) {
        this.setState({
            data: {
                type: event.target.value
            }
        })
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.data.type);
        event.preventDefault();
        console.log(this.state.data);
        console.log('state before dispatch');
        console.log(this.props.store.getState()._dashboard);
        switch (this.state.data.type) {
            case "image":
                const data = this.state.data;
                console.log("we got an image ");
                this.props.store.dispatch(addImage(
                        data.imageUrl,
                        data.caption,
                        data.credit,
                    ));
                console.log('state after dispatch');
                const store = this.props.store.getState()._dashboard;
                console.log(store);
                break;
            default:
                console.log("checkback later");
        }

        $.ajax({
          url: '/store',
          dataType: 'json',
          data: this.state.data,
          type: 'POST'
        });
    }

    updateInput(value, event) {
        this.state.data[value] = event.target.value;
    }

    showInputForComponentType(componentType) {
        console.log('Dropdown changed: ' + componentType);
        switch(componentType) {
            case 'title':
                return(
                    <div>
                        <input 
                            placeholder="Title" 
                            type="text" name="title" 
                            onChange={this.updateInput.bind(this, 'title')} 
                            className="form-control"
                        />
                    </div>
                );
                break;
            case 'author':
                return(
                    <div><input placeholder="Author" type="text" name="author" onChange={this.updateInput.bind(this, 'author')} className="form-control"/></div>
                );
                break;
            case 'image':
            case 'cover_image':
                return(
                    <div>
                        <input placeholder="URL" type="text" name="url" onChange={this.updateInput.bind(this, 'imageUrl')} className="form-control"/>
                        <input placeholder="Credit" type="text" name="credit"  onChange={this.updateInput.bind(this, 'credit')} className="form-control"/>
                        <input placeholder="Caption" type="text" name="caption" onChange={this.updateInput.bind(this, 'caption')} className="form-control"/>
                    </div>
                );
                break;
            case 'quote':
                return(
                    <div>
                        <input placeholder="Quote" type="text" name="quote" onChange={this.updateInput.bind(this, 'quote')} className="form-control"/>
                        <input placeholder="Quote Maker" type="text" name="quoteMaker" onChange={this.updateInput.bind(this, 'quoteMaker')} className="form-control"/>
                    </div>
                );
                break;
            case 'text_section':
                return(
                    <div><textarea name="text" cols="90" rows="8" ref='dashboardInput'></textarea></div>
                );
                break;
            default:
                return(<p>nothing</p>);
                break;
        }
    }
    // selectFields(type)
    // {
    //     var contents = {};
    //     switch(type) {
    //         case 'title':
    //             contents['title'] = this.state.title;
    //             break;
    //         case 'author':
    //             contents['author'] = this.state.author;
    //             break;
    //         case 'image':
    //             contents['url'] = this.state.imageUrl;
    //             contents['caption'] = this.state.imageCaption;
    //             contents['credit'] = this.state.imageCredit;
    //             break;
    //         case 'quote':
    //             contents['quote'] = this.state.quote;
    //             contents['quoteMaker'] = this.state.quoteMaker;
    //             break;
    //         case 'text_section':
    //             return(
    //                 <div><textarea name="text" cols="90" rows="8"></textarea></div>
    //             );
    //             break;
    //         default:
    //             return(<p>nothing</p>);
    //             break;
    //     }
    //     return contents;
    // }
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
