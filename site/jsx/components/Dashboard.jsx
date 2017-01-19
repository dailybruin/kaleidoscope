import React from 'react';
import {connect} from 'react-redux';
import {addHeader, addImage, addQuote, addText, addSubhead} from '../actions';


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
          <div className="container dashboard-container form-group" >
            <form onSubmit={this.handleSubmit}>
                <div className="row component-inputs">
                    <div>{this.showInputForComponentType(this.state.data.type)}</div>
                </div>
                <div className="dropdown">
                    <label for="dropdown">Select component:</label>
                    <div className="row">
                        <div className="col-sm-11">
                            <select value={this.state.data.type} onChange={this.handleDropdownChange} className="form-control">
                                {componentOptions}
                            </select>
                        </div>
                        <div className="col-sm-1">
                            <input className="btn btn-primary" type='submit'></input>
                        </div>
                    </div>
                </div>
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
        console.log(this.state.data.type)
        console.log(this.state.data)
        const data = this.state.data;
        switch (this.state.data.type) {
            case "header":
                this.props.dispatch(addHeader(data.title, data.author, data.coverImageUrl));
                break;
            case "image":
                this.props.dispatch(addImage(
                        data.imageUrl,
                        data.credit,
                        data.caption,
                    ));
                break;
            case "quote":
                this.props.dispatch(addQuote(data.quoteText, data.quoteSource));
                break;
            case "subhead":
                this.props.dispatch(addSubhead(data.subhead));
                break;
            case "text_section":
                this.props.dispatch(addText(data.text));
                break;
            case "text_section":
                this.props.dispatch(addText(data.text));
                break;
            case "subhead":
                this.props.dispatch(addSubhead(data.subhead));
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
            case 'header':
                return(

                    <div>
                        <div className="col-md-4">
                            <label for="title">Title:</label>
                            <input
                                placeholder="Title" 
                                type="text" name="title" 
                                onChange={this.updateInput.bind(this, 'title')} 
                                className="form-control"/>
                        </div>
                        <div className="col-md-4">    
                            <label for="author">Author:</label>                   
                            <input placeholder="Author" type="text" name="author" onChange={this.updateInput.bind(this, 'author')} className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label for="url">Cover Image URL:</label>
                            <input placeholder="Cover image URL" type="text" name="url" onChange={this.updateInput.bind(this, 'coverImageUrl')} className="form-control"/>
                        </div>
                    </div>
                    

                );
                break;
            case 'subhead':
                return(
                    <div>
                        <div className="col-md-4">
                            <label for="subhead">Subhead:</label>
                            <input 
                                placeholder="Subhead" 
                                type="text" 
                                name="subhead" 
                                onChange={this.updateInput.bind(this, 'subhead')} 
                                className="form-control"
                            />
                        </div>
                    </div>
                   

                );
            case 'image':
                return(
                    <div>
                        <div className="col-md-4">
                            <label for="url">URL:</label>
                            <input placeholder="URL" type="text" name="url" onChange={this.updateInput.bind(this, 'imageUrl')} className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label for="credit">Credit:</label>
                            <input placeholder="Credit" type="text" name="credit"  onChange={this.updateInput.bind(this, 'credit')} className="form-control"/>
                        </div>
                        <div className="col-md-4">
                            <label for="caption">Caption:</label>
                            <input placeholder="Caption" type="text" name="caption" onChange={this.updateInput.bind(this, 'caption')} className="form-control"/>
                        </div>
                    </div>
                );
                break;
            case 'quote':
                return(
                    <div>
                        <div className="col-md-4">
                            <label for="quote">Quote:</label>
                            <input 
                                placeholder="Quote" 
                                type="text" 
                                name="quote" 
                                onChange={this.updateInput.bind(this, 'quoteText')} 
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-4">
                            <label for="quoteMaker">Quote Maker:</label>
                            <input 
                                placeholder="Quote Maker" 
                                type="text" 
                                name="quoteMaker" 
                                onChange={this.updateInput.bind(this, 'quoteSource')} 
                                className="form-control"
                            />
                        </div>
                    </div>
                );
                break;
            case 'text_section':
                return(
                    <div className="col-md-12">
                        <label for="text">Text:</label>
                        <textarea 
                            name="text" 
                            rows="8"
                            className="form-control"
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

// this has no purpose at the moment since dasboard will not change typically
const mapStateToProps = (state) => {
        return {
        src:state._dashboard.src,
        caption: state._dashboard.caption,
        credit: state._dashboard.credit,
    }
}

var ConnectedDashboard = connect(mapStateToProps)(Dashboard)

export default ConnectedDashboard;

// currently keep track of one thing which is componnent rendering 
