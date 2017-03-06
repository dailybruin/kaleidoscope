import React from 'react';
import {connect} from 'react-redux';
import {addHeader, addImage, addQuote, addText, addSubhead, addMetatags,deleteComponent,resetHeader} from '../redux/actions';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'
import Checkbox from './common/Checkbox';
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
                            payload: {},
                        },
                        edit_component_id: "",
                        download_file: false
                     };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGenPage = this.handleGenPage.bind(this);
        this.toggleDashboard = this.toggleDashboard.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.showInputForComponentType = this.showInputForComponentType.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);

        // Load all preloaded components
        // console.log(this.props.preloaded_components);
        for (var i = 0; i < this.props.preloaded_components.length; i++) {
            var formatted_component_data = {
                'type': this.props.preloaded_components[i].component_type,
                'payload': this.props.preloaded_components[i].component_data
            }

            this.appendPagePreview(this.randomIdentifier(), formatted_component_data);
        }
    }



    render() {
        // Set option values to componentTypes where spaces are replaced by '_'
        var componentOptions = this.props.componentTypes.map(function(type, i){
          return (
            <option value={type.replace(/\s/g , "_")}>{type}</option>
          );
        });

        return (
            <div className="dashboard-container">
                {/* BEGIN dashboard form */}
                <div className="dashboard-main">
                    {/* BEGIN dashboard nav */}
                    <div className="dashboard-header">
                        <h2>NAV</h2>
                    </div>
                    {/* END dashboard nav */}

                    <div className="dashboard-input-group">
                        <div className="dropdown">
                            <select value={this.state.data.type} onChange={this.handleDropdownChange} className="form-control">
                                {componentOptions}
                            </select>
                        </div>
                        <div className="component-inputs">
                            {this.showInputForComponentType(this.state.data.type)}
                        </div>

                        {/* Submit component button */}
                        <div className="btn btn-primary submit-component-btn" onClick={this.handleSubmit}>Submit</div>
                    </div>
                    {/* Generate button */}
                    <div className="btn-generate-group">
                        <button onClick={this.handleGenPage} className="btn btn-primary btn-generate">Save</button>
                        <Checkbox label={"Download index file"} handleCheckboxChange={this.toggleCheckbox}/>
                    </div>
                </div>
                {/* END dashboard form */}
                <div className="dashboard-sub" onClick={this.toggleDashboard}>
                    <button><span className="glyphicon glyphicon-pencil"></span></button>
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
        // console.log('A component was submitted: ' + this.state.data.type);
        // console.log(this.state);

        event.preventDefault();
        if (this.state.edit_component_id !== "") {
            console.log('Match Found')
            this.appendPagePreview(this.state.edit_component_id, this.state.data);
            this.setState({
                edit_component_id: "",
                data: {
                    type: this.state.data.type,
                    payload: {},
                }
            });
            return;
        }

        var identifier = this.randomIdentifier();
        this.appendPagePreview(identifier, this.state.data);
        this.setState({
            data: {
                type: this.state.data.type,
                payload: {},
            }
        })
    }

    randomIdentifier() {
        return Math.random().toString(36).substring(7);
    }
    handleDelete (store_id) {
        this.props.dispatch(deleteComponent(store_id));
        this.props.dispatch(resetHeader(store_id));
    }
    appendPagePreview(store_id, data) {
        const component_params = data.payload;
        const edit_button = <button className="btn btn-success" onClick={()=>this.handleEdit(store_id)}><span className="glyphicon glyphicon-edit"></span></button>;
        const delete_button = <button className="btn btn-success" onClick={()=> this.handleDelete(store_id)}><span className="glyphicon glyphicon-trash"></span></button>;
        const button_group = (
            <div className="btn-group btn-group-md component-action-btn-group" role="group">
                {edit_button}
                {delete_button}
            </div>
            );
        // add delete button here
        switch (data.type) {
            case "header":
                this.props.dispatch(addHeader(
                    component_params.title, 
                    component_params.author, 
                    component_params.image, 
                    store_id, 
                    button_group,
                    'header',
                    ));
                this.props.dispatch(addMetatags(component_params.title, component_params.image, store_id));
                break;
            case "image":
                this.props.dispatch(addImage(
                        component_params.url,
                        component_params.credit,
                        component_params.caption,
                        store_id,
                        button_group,
                        'image',
                    ));
                break;
            case "quote":
                this.props.dispatch(addQuote(component_params.quoteText, component_params.quoteSource, store_id,button_group,'quote'));
                break;
            case "subhead":
                this.props.dispatch(addSubhead(component_params.text,store_id,button_group,'subhead'));
                break;
            case "text_section":
                this.props.dispatch(addText(component_params.text, store_id,button_group,'text_section'));
                break;
            default:
                console.log("Component category not supported.");
        }

        this.setState({
            data:{
                type: this.state.data.type,
                payload: {}
            }
        });
    }

    handleEdit(id) {
        let redux_store = this.props.store.getState()._dashboard;
        for (var i = 0; i< redux_store.length; i++) {
            let item_props = redux_store[i].props;
            if (id === item_props.database_id) {
                this.setState({
                    data: {
                        type: item_props.type,
                        payload: item_props.component.props,

                    },
                    edit_component_id: id,
                })
                break;
            }
        }
    }

    formHTMLPage() {
        // Use React.renderToStaticMarkup to convert each react component into HTML
        // Collect all HTML pieces and then save them to a file using FileSaver.js
        let redux_store = this.props.store.getState()._dashboard;
        let redux_header = this.props.store.getState()._header;
        let content = "";
        if (redux_header.length > 0) {
            content = "<head>" + redux_header[0].tags + "</head>";
        }

        var num_components = redux_store.length;
        var submitted_components = [];
        content = content + "<body>"
        for (var i = 0; i < num_components; i++) {
            if (redux_store[i].props.database_id !== undefined) {
                content = content + ReactDOMServer.renderToStaticMarkup(redux_store[i].props.component)

                // Array for db insertion
                var data = {"component_data": redux_store[i].props.component.props, "component_type": redux_store[i].props.type};
                submitted_components.push(data);
            }
        }
        const jquery = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>';
        const bootstrap_js = '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>';
        content = content + jquery + bootstrap_js + "</body>";
        var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
        if (this.state.download_file)
            FileSaver.saveAs(blob, "index.html");

        return submitted_components;
    }

    handleGenPage(event) {
        event.preventDefault();

        let submitted_components = this.formHTMLPage();

        // Save to database from submitted_components
        $.ajax({
          url: '/gen',
          type: 'POST',
          data: {
            "data": JSON.stringify(submitted_components), 
            "current_id": JSON.stringify(this.props.database_id)
          },
          type: 'POST'
        });

        this.setState({
            data: {
                type: this.state.data.type,
                payload: {}
            }
        });

        // Client-side reload of page because cannot reload after returning from ajax call
        // window.location.reload(true);
        window.location = "/";
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
        const payload = this.state.data.payload;
        switch(this.state.data.type) {
            case 'header':
                return(
                    <div>
                        <div className="component-input">
                            <label htmlFor="title">Title:</label>
                            <input
                                placeholder="Title" 
                                type="text" name="title" 
                                onChange={this.updateInput.bind(this,'title')} 
                                ref={(input) => this.input}
                                className="form-control"
                                value={payload.title === undefined ? "" : payload.title}/>
                        </div>
                        <div className="component-input">    
                            <label htmlFor="author">Author:</label>                   
                            <input
                                placeholder="Author"
                                type="text" name="author"
                                onChange={this.updateInput.bind(this, 'author')}
                                className="form-control"
                                value={payload.author === undefined ? "" : payload.author}/>
                        </div>
                        <div className="component-input">
                            <label htmlFor="url">Cover Image URL:</label>
                            <input
                                placeholder="Cover image URL"
                                type="text" name="url"
                                onChange={this.updateInput.bind(this, 'image')}
                                className="form-control"
                                value={payload.image === undefined ? "" : payload.image}/>
                        </div>
                    </div>
                );
            case 'subhead':
                return(
                    <div>
                        <div className="component-input">
                            <label htmlFor="subhead">Subhead:</label>
                            <input 
                                placeholder="Subhead" 
                                type="text" 
                                name="subhead" 
                                onChange={this.updateInput.bind(this, 'text')} 
                                className="form-control"
                                value={payload.text === undefined ? "" : payload.text} />
                        </div>
                    </div>
                );
            case 'image':
                return(
                    <div>
                        <div className="component-input">
                            <label htmlFor="url">URL:</label>
                            <input 
                                placeholder="URL" type="text" name="url"
                                onChange={this.updateInput.bind(this, 'url')}
                                className="form-control"
                                value={payload.url === undefined ? "" : payload.url}/>
                        </div>
                        <div className="component-input">
                            <label htmlFor="credit">Credit:</label>
                            <input
                                placeholder="Credit" type="text" name="credit" 
                                onChange={this.updateInput.bind(this, 'credit')}
                                className="form-control"
                                value={payload.credit === undefined ? "" : payload.credit}/>
                        </div>
                        <div className="component-input">
                            <label htmlFor="caption">Caption:</label>
                            <input
                                placeholder="Caption" type="text" name="caption"
                                onChange={this.updateInput.bind(this, 'caption')}
                                className="form-control"
                                value={payload.caption === undefined ? "" : payload.caption}/>
                        </div>
                    </div>
                );
            case 'quote':
                return(
                    <div>
                        <div className="component-input">
                            <label htmlFor="quote">Quote:</label>
                            <input 
                                placeholder="Quote" 
                                type="text" 
                                name="quote" 
                                onChange={this.updateInput.bind(this, 'quoteText')} 
                                className="form-control"
                                value={payload.quoteText === undefined ? "" : payload.quoteText} />
                        </div>
                        <div className="component-input">
                            <label htmlFor="quoteMaker">Quote Source:</label>
                            <input 
                                placeholder="Quote Maker" 
                                type="text" 
                                name="quoteMaker" 
                                onChange={this.updateInput.bind(this, 'quoteSource')} 
                                className="form-control"
                                value={payload.quoteSource === undefined ? "" : payload.quoteSource} />
                        </div>
                    </div>
                );
            case 'text_section':
                return(
                    <div className="component-input text">
                        <label htmlFor="text">Text:</label>
                        <textarea 
                            name="text" 
                            rows="3"
                            className="form-control"
                            onChange={this.updateInput.bind(this, 'text')}
                            value={payload.text === undefined ? "" : payload.text}>
                        </textarea>
                    </div>
                );
            default:
                return(<p>nothing</p>);
        }
    }

    toggleDashboard(){
        let app = document.querySelector('.app-container');
        app.classList.toggle('editing');
    }

    toggleCheckbox(event) {
        var prevVal = this.state.download_file;
        this.setState({
            download_file: !prevVal
        });
    }

}

// this has no purpose at the moment since dasboard will not change typically
const mapStateToProps = (state) => {
    return {
        src: state._dashboard.src
    };
};

var ConnectedDashboard = connect(mapStateToProps)(Dashboard);

export default ConnectedDashboard;

// currently keep track of one thing which is componnent rendering 
