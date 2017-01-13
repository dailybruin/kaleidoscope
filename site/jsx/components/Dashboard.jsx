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
                            type: this.props.componentTypes[0],
                            payload: {}
                        }
                     };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGenPage = this.handleGenPage.bind(this);
    }

    render() {
        //console.log('state payload', this.state.data.payload);
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
            <button onClick={this.handleGenPage}>Generate Page</button>
          </div>
        );
    }

    handleDropdownChange(event) {
        //updates type from dropdown & clears input fields after submit
        this.setState({
            data: {
                type: event.target.value,
                payload: {}
            }
        });
    }

    handleSubmit(event) {
        console.log('A component was submitted: ' + this.state.data.type);
        console.log(this.state.data);
        event.preventDefault();

        $.ajax({
          url: '/store',
          dataType: 'json',
          data: this.state.data,
          type: 'POST',
          success: function(database_id) {
            this.appendPagePreview(database_id);
          }.bind(this),
          error: function() {
            alert('Error occured');
          }.bind(this)
        });

        //clears input fields after submit
        this.setState({
            data:{
                type: this.state.data.type,
                payload: {}
            }
        });
    }

    appendPagePreview(database_id) {
        
        const component_params = this.state.data.payload;
        switch (this.state.data.type) {
            case "header":
                this.props.dispatch(addHeader(component_params.title, component_params.author, component_params.coverImageUrl, database_id));
                break;
            case "image":
                this.props.dispatch(addImage(
                        component_params.imageUrl,
                        component_params.credit,
                        component_params.caption,
                        database_id,
                    ));
                break;
            case "quote":
                this.props.dispatch(addQuote(component_params.quoteText, component_params.quoteSource, database_id));
                break;
            case "subhead":
                this.props.dispatch(addSubhead(component_params.subhead,database_id));
                break;
            case "text_section":
                this.props.dispatch(addText(component_params.text, database_id));
                break;
            default:
                console.log("Component category not supported.");
        }
    }

    handleGenPage(event) {
        console.log('A page was submitted');
        event.preventDefault();

        $.ajax({
          url: '/gen',
          type: 'POST'
        });

        this.setState({
            data: {
                type: this.state.data.type,
                payload: {}
            }
        });
    }

    updateInput(value, event) {

        let updatedObj = {};
        updatedObj[value] = event.target.value;

        this.setState({
            data:{
                type: this.state.data.type,
                payload: Object.assign({}, this.state.data.payload, updatedObj)
            }
        });
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
                                className="form-control"
                                value={this.state.data.payload.title}/>
                        </div>
                        <div className="col-md-4">    
                            <label for="author">Author:</label>                   
                            <input
                                placeholder="Author"
                                type="text" name="author"
                                onChange={this.updateInput.bind(this, 'author')}
                                className="form-control"
                                value={this.state.data.payload.author}/>
                        </div>
                        <div className="col-md-4">
                            <label for="url">Cover Image URL:</label>
                            <input
                                placeholder="Cover image URL"
                                type="text" name="url"
                                onChange={this.updateInput.bind(this, 'coverImageUrl')}
                                className="form-control"
                                value={this.state.data.payload.coverImageUrl}/>
                        </div>
                    </div>
                );
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
                                value={this.state.data.payload.subhead} />
                        </div>
                    </div>
                );
            case 'image':
                return(
                    <div>
                        <div className="col-md-4">
                            <label for="url">URL:</label>
                            <input 
                                placeholder="URL" type="text" name="url"
                                onChange={this.updateInput.bind(this, 'imageUrl')}
                                className="form-control"
                                value={this.state.data.payload.imageUrl}/>
                        </div>
                        <div className="col-md-4">
                            <label for="credit">Credit:</label>
                            <input
                                placeholder="Credit" type="text" name="credit" 
                                onChange={this.updateInput.bind(this, 'credit')}
                                className="form-control"
                                value={this.state.data.payload.credit}/>
                        </div>
                        <div className="col-md-4">
                            <label for="caption">Caption:</label>
                            <input
                                placeholder="Caption" type="text" name="caption"
                                onChange={this.updateInput.bind(this, 'caption')}
                                className="form-control"
                                value={this.state.data.payload.caption}/>
                        </div>
                    </div>
                );
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
                                value={this.state.data.payload.quoteText} />
                        </div>
                        <div className="col-md-4">
                            <label for="quoteMaker">Quote Maker:</label>
                            <input 
                                placeholder="Quote Maker" 
                                type="text" 
                                name="quoteMaker" 
                                onChange={this.updateInput.bind(this, 'quoteSource')} 
                                className="form-control"
                                value={this.state.data.payload.quoteSource} />
                        </div>
                    </div>
                );
            case 'text_section':
                return(
                    <div className="col-md-12">
                        <label for="text">Text:</label>
                        <textarea 
                            name="text" 
                            rows="8"
                            className="form-control"
                            onChange={this.updateInput.bind(this, 'text')}>
                        </textarea>
                    </div>
                );
            default:
                return(<p>nothing</p>);
        }
    }

}

// this has no purpose at the moment since dasboard will not change typically
const mapStateToProps = (state) => {
        return {
            src:state._dashboard.src,
            caption: state._dashboard.caption,
            credit: state._dashboard.credit,
        };
};

var ConnectedDashboard = connect(mapStateToProps)(Dashboard);

export default ConnectedDashboard;

// currently keep track of one thing which is componnent rendering 
