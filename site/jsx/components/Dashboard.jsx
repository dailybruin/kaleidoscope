import React from 'react';
import {createStore, combineReducers }from 'redux';

// currently keep track of one thing which is componnent rendering 


const dashboard_reducer = function(state = [], action) {
    console.log("intialized an empty array for state");
    switch (action.type) {
        case 'ADD_NEW_COMPONENT':
            return {
                ...state,
                message: action.value
            }
        default:
            return state;
    }
}

// const page_reducer = function(state = [], action) {
//     switch (action.type){
//         default:
//             return state;
//     }
// }

// const reducer = combineReducers({
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

// const addImage = function (src, credit, caption) {
//     return {
//         type: 'ADD_IMAGE',
//         src: src,
//         credit: credit,
//         caption: caption,
//     }
// }

// const addNewComponent = function (component) {
//     return{
//         type: 'ADD_NEW_COMPONENT',
//         component: component
//     }
// }
// const test_url = 'https://s-media-cache-ak0.pinimg.com/originals/14/37/10/143710e981aedc43f8091f066c645660.jpg';
// const test_credit = 'TEH INTERNET';
// const test_caption = 'Can I haz cupcake?';
// console.log(store_0.dispatch(addImage(test_url,test_credit,test_caption)));

class Dashboard extends React.Component {
    static propTypes = {
        componentTypes: React.PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
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
        console.log('A component was submitted: ' + this.state.data.type);
        event.preventDefault();

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
            case 'header':
                return(
                    <div>
                        <input
                            placeholder="Title" 
                            type="text" name="title" 
                            onChange={this.updateInput.bind(this, 'title')} 
                            className="form-control"
                        />
                        <div>
                            <input placeholder="URL" type="text" name="url" onChange={this.updateInput.bind(this, 'imageUrl')} className="form-control"/>
                            <input placeholder="Credit" type="text" name="credit"  onChange={this.updateInput.bind(this, 'imageCredit')} className="form-control"/>
                            <input placeholder="Caption" type="text" name="caption" onChange={this.updateInput.bind(this, 'imageCaption')} className="form-control"/>
                        </div>
                        <input 
                            placeholder="Author" 
                            type="text" name="author" 
                            onChange={this.updateInput.bind(this, 'author')} 
                            className="form-control"
                        />
                        <input 
                            placeholder="Description" 
                            type="text" name="description" 
                            onChange={this.updateInput.bind(this, 'description')} 
                            className="form-control"
                        />
                    </div>
                );
                break;
            case 'subhead':
                return(
                    <div>
                        <input 
                            placeholder="Subhead" 
                            type="text" 
                            name="subhead" 
                            onChange={this.updateInput.bind(this, 'subhead')} 
                            className="form-control"
                        />
                    </div>
                );
                break;
            case 'image':
                return(
                    <div>
                        <input placeholder="URL" type="text" name="url" onChange={this.updateInput.bind(this, 'imageUrl')} className="form-control"/>
                        <input placeholder="Credit" type="text" name="credit"  onChange={this.updateInput.bind(this, 'imageCredit')} className="form-control"/>
                        <input placeholder="Caption" type="text" name="caption" onChange={this.updateInput.bind(this, 'imageCaption')} className="form-control"/>
                    </div>
                );
                break;
            case 'quote':
                return(
                    <div>
                        <input 
                            placeholder="Quote" 
                            type="text" 
                            name="quote" 
                            onChange={this.updateInput.bind(this, 'quoteText')} 
                            className="form-control"
                        />
                        <input 
                            placeholder="Quote Maker" 
                            type="text" 
                            name="quoteMaker" 
                            onChange={this.updateInput.bind(this, 'quoteSource')} 
                            className="form-control"
                        />
                    </div>
                );
                break;
            case 'text_section':
                return(
                    <div>
                        <textarea 
                            name="text" 
                            cols="90" 
                            rows="8"
                            onChange={this.updateInput.bind(this, 'text')}
                        >
                        </textarea>
                    </div>
                );
                break;
            default:
                return(<p>nothing</p>);
                break;
        }
    }
};

export default Dashboard;
