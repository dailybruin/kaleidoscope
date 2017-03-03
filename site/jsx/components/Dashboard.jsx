import React from 'react';
import {connect} from 'react-redux';
import {addHeader, addImage, addQuote, addText, addSubhead, addMetatags,deleteComponent,resetHeader,updateStyles} from '../actions';
var FileSaver = require('file-saver');
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Checkbox from './Checkbox';
import Var from '../../assets/stylesheets/var';

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
                            styles: {}
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
        this.updateStyles = this.updateStyles.bind(this);

        // Load all preloaded components
        console.log(this.props.preloaded_components);
        for (var i = 0; i < this.props.preloaded_components.length; i++) {
            var formatted_component_data = {
                'type': this.props.preloaded_components[i].component_type,
                'payload': this.props.preloaded_components[i].component_data,
                'styles': this.props.preloaded_components[i].component_styles
            }

            this.appendPagePreview(this.randomIdentifier(), formatted_component_data);
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
                <div className="dashboard-main">
                    <form onSubmit={this.handleSubmit}>
                        <div className="dropdown">
                            {/*<label htmlFor="dropdown">Select component:</label>*/}
                            <div>
                                <div>
                                    <select value={this.state.data.type} onChange={this.handleDropdownChange} className="form-control">
                                        {componentOptions}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="component-inputs">
                            <div>{this.showInputForComponentType(this.state.data.type)}</div>
                        </div>
                        <div>
                            <div className="btn btn-primary btn-down preview" onClick={this.toggleDashboard}>Preview</div>
                            <input className="btn btn-primary" type='submit'></input>
                        </div>
                        <div>
                            <Checkbox label={"Download index file"} handleCheckboxChange={this.toggleCheckbox}/>
                        </div>
                    </form>
                </div>
                <div className="dashboard-sub" onClick={this.toggleDashboard}>
                    <button>EDIT</button>
                </div>
                <button onClick={this.handleGenPage} className="btn btn-primary btn-generate">{buttonText}</button>
            </div>
        );
    }

    handleDropdownChange(event) {
        //updates type from dropdown & clears input fields after submit
        this.setState({
            data: {
                type: event.target.value,
                payload: {},
                styles: {}
            }
        });
    }

    handleSubmit(event) {
        // console.log('A component was submitted: ' + this.state.data.type);
        // console.log(this.state);

        event.preventDefault();

        // if custom color styling was changed, update css and inject updated css to page preview
        if (Object.keys(this.state.data.styles).length) {
            this.updateStyles();
        }

        if (this.state.edit_component_id !== "") {
            console.log('Match Found')
            this.appendPagePreview(this.state.edit_component_id, this.state.data);
            this.setState({
                edit_component_id: "",
                data: {
                    type: this.state.data.type,
                    payload: {},
                    styles: {}
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
                styles: {}
            }
        })
    }

    updateStyles() {
        const props = this.props;
        $.ajax({
            url: '/styles',
            type: 'POST',
            dataType: 'text',
            data: {
                "styles": JSON.stringify(this.state.data.styles),
                "type": JSON.stringify(this.state.data.type)
            },
            success: function(updated_css) {
                console.log("new css obtained by dashboard: " + updated_css);
                props.dispatch(updateStyles(updated_css));
            },
            error: function(err) {
                console.log("Error updating css in /styles endpoint:");
                console.log(err);
            }
        });
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
                payload: {},
                styles: {}
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
                        payload: item_props.component.props
                    },
                    edit_component_id: id,
                })
                break;
            }
        }
    }

    handleGenPage(event) {
        event.preventDefault();

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
        content = content + "</body>";
        var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
        if (this.state.download_file)
            FileSaver.saveAs(blob, "index.html");

        // Save to database from submitted_components
        $.ajax({
          url: '/gen',
          type: 'POST',
          data: {
            "data": JSON.stringify(submitted_components), 
            "current_id": JSON.stringify(this.props.database_id)
          }
        });

        this.setState({
            data: {
                type: this.state.data.type,
                payload: {},
                styles: {}
            }
        });

        window.location.reload(true);
    }

    updateInput(value, value_type, event) {

        let updatedObj = {};
        updatedObj[value] = event.target.value;
        if (value_type == "content") {
            this.setState({
                data:{
                    type: this.state.data.type,
                    payload: Object.assign({}, this.state.data.payload, updatedObj),
                    styles: this.state.data.styles
                }
            });
        }
        else if (value_type == "style") {
            this.setState({
                data:{
                    type: this.state.data.type,
                    payload: this.state.data.payload,
                    styles: Object.assign({}, this.state.data.styles, updatedObj)
                }
            });
        }

    }

    showInputForComponentType(componentType) {
        const payload = this.state.data.payload;
        const styles = this.state.data.styles;
        switch(this.state.data.type) {
            case 'header':
                return(
                    <div>
                        <div className="component-input">
                            <label htmlFor="title">Title:</label>
                            <input
                                placeholder="Title" 
                                type="text" name="title" 
                                onChange={this.updateInput.bind(this,'title', 'content')} 
                                ref={(input) => this.input}
                                className="form-control"
                                value={payload.title === undefined ? "" : payload.title}/>
                        </div>
                        <div className="component-input">    
                            <label htmlFor="author">Author:</label>                   
                            <input
                                placeholder="Author"
                                type="text" name="author"
                                onChange={this.updateInput.bind(this, 'author', 'content')}
                                className="form-control"
                                value={payload.author === undefined ? "" : payload.author}/>
                        </div>
                        <div className="component-input">
                            <label htmlFor="url">Cover Image URL:</label>
                            <input
                                placeholder="Cover image URL"
                                type="text" name="url"
                                onChange={this.updateInput.bind(this, 'image', 'content')}
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
                                onChange={this.updateInput.bind(this, 'text', 'content')} 
                                className="form-control"
                                value={payload.text === undefined ? "" : payload.text} />
                            <label htmlFor="color">Text Color:</label>
                            <input 
                                placeholder="default: black" 
                                type="text" 
                                name="color" 
                                onChange={this.updateInput.bind(this, 'color', 'style')} 
                                className="form-control"
                                value={styles.color === undefined ? "" : styles.color} />
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
                                onChange={this.updateInput.bind(this, 'url', 'content')}
                                className="form-control"
                                value={payload.url === undefined ? "" : payload.url}/>
                        </div>
                        <div className="component-input">
                            <label htmlFor="credit">Credit:</label>
                            <input
                                placeholder="Credit" type="text" name="credit" 
                                onChange={this.updateInput.bind(this, 'credit', 'content')}
                                className="form-control"
                                value={payload.credit === undefined ? "" : payload.credit}/>
                        </div>
                        <div className="component-input">
                            <label htmlFor="caption">Caption:</label>
                            <input
                                placeholder="Caption" type="text" name="caption"
                                onChange={this.updateInput.bind(this, 'caption', 'content')}
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
                                onChange={this.updateInput.bind(this, 'quoteText', 'content')} 
                                className="form-control"
                                value={payload.quoteText === undefined ? "" : payload.quoteText} />
                        </div>
                        <div className="component-input">
                            <label htmlFor="quoteMaker">Quote Source:</label>
                            <input 
                                placeholder="Quote Maker" 
                                type="text" 
                                name="quoteMaker" 
                                onChange={this.updateInput.bind(this, 'quoteSource', 'content')} 
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
                            onChange={this.updateInput.bind(this, 'text', 'content')}
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
            // src:state._dashboard.src,
            // caption: state._dashboard.caption,
            // credit: state._dashboard.credit,
        };
};

var ConnectedDashboard = connect(mapStateToProps)(Dashboard);

export default ConnectedDashboard;

// currently keep track of one thing which is componnent rendering 
