import React from 'react';
import {connect} from 'react-redux';
import {addHeader, addImage, addQuote, addText, addSubhead} from '../actions';
var FileSaver = require('file-saver');



class Dashboard extends React.Component {
    
    static propTypes = {
        componentTypes: React.PropTypes.array.isRequired,
        preloaded_components: React.PropTypes.array.isRequired,
        database_id: React.PropTypes.string.isRequired
    }
    constructor(props) {
        super(props);
        // add syntatic sugar () => {} to prevent exessive bind calls 
        this.state = {  data: {
                            type: this.props.componentTypes[0],
                            payload: {}
                        },
                        componentsTable: []
                     };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGenPage = this.handleGenPage.bind(this);

        // Load all preloaded components
        for (var i = 0; i < this.props.preloaded_components.length; i++) {
            // console.log(this.props.preloaded_components[i]);
            var formatted_component_data = {
                'type': this.props.preloaded_components[i].component_type,
                'payload': this.props.preloaded_components[i].component_data
            }
            this.appendPagePreview('arbitrary id', formatted_component_data);
        }
    }

    render() {
        var componentOptions = this.props.componentTypes.map(function(type, i){
          return (
            <option value={type.replace(/\s/g , "_")}>{type}</option>
          );
        });

        var buttonText = this.props.database_id == '' ? 'Generate Page' : 'Update Page';
        return (
          <div className="dashboard-container" >
            <div className="container form-group">
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
                <button onClick={this.handleGenPage} className="btn btn-block btn-primary">{buttonText}</button>
              </div>
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
        this.appendPagePreview('arbitrary id', this.state.data);
        console.log('Current components table: ' + this.state.componentsTable);
    }

    appendPagePreview(store_id, data) {
        console.log(data);
        const component_params = data.payload;
        switch (data.type) {
            case "header":
                this.props.dispatch(addHeader(component_params.title, component_params.author, component_params.coverImageUrl, store_id));
                break;
            case "image":
                this.props.dispatch(addImage(
                        component_params.imageUrl,
                        component_params.credit,
                        component_params.caption,
                        store_id,
                    ));
                break;
            case "quote":
                this.props.dispatch(addQuote(component_params.quoteText, component_params.quoteSource, store_id));
                break;
            case "subhead":
                this.props.dispatch(addSubhead(component_params.subhead,store_id));
                break;
            case "text_section":
                this.props.dispatch(addText(component_params.text, store_id));
                break;
            default:
                console.log("Component category not supported.");
        }

        var Data = {"component_data": component_params, "component_type": this.state.data.type};
        this.state.componentsTable.push(Data);

        this.setState({
            data:{
                type: this.state.data.type,
                payload: {}
            }
        });
    }

    handleGenPage(event) {
        console.log('A page was submitted');
        /*
            Use React.renderToStaticMarkup to convert each react component into HTML
            Collect all HTML pieces and then save them to a file using FileSaver.js
        */ 
        let redux_store = this.props.store.getState()._dashboard;
        var num_components = redux_store.length;
        let content = "";
        for (var i = 0; i < num_components; i++) {
            content = content + React.renderToStaticMarkup(redux_store[i].component)
        }
        var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "index.html");
        event.preventDefault();
        $.ajax({
          url: '/gen',
          type: 'POST',
          data: {
            "data": JSON.stringify(this.state.componentsTable), 
            "current_id": JSON.stringify(this.props.database_id)
          },
          type: 'POST'
          // success: function(database_id) {
          // }.bind(this),
          // error: function() {
          //   alert('Error occured');
          // }.bind(this)
        });

        this.setState({
            data: {
                type: this.state.data.type,
                payload: {}
            },
            componentsTable: []
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
                            rows="3"
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
