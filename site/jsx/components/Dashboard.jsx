import React from 'react';
import {connect} from 'react-redux';
import {addHeader, addImage, addQuote, addText, addSubhead, addMetatags} from '../actions';
import Helmet from "react-helmet";
import ReactDOMServer from 'react-dom/server';
import DocumentMeta from 'react-document-meta';
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
        // let test_head = <Helmet 
        //                     title="Test Title"
        //                     meta={[{name: "description", content: "Testing Helmet"}]}/>;
        // const test_helmet = <Helmet title="My Title"/>
        // console.log(Helmet.peek());
        // console.log(React.renderToString(<Helmet title="My Title"/>));
        // let head = Helmet.rewind();
        let test_head =
        <Helmet
            htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
            title="My Title"
            titleTemplate="MySite.com - %s"
            defaultTitle="My Default Title"
            titleAttributes={{itemprop: "name", lang: "en"}}
            base={{target: "_blank", href: "http://mysite.com/"}}
            meta={[
                {name: "description", content: "Helmet application"},
                {property: "og:type", content: "article"}
            ]}
            link={[
                {rel: "canonical", href: "http://mysite.com/example"},
                {rel: "apple-touch-icon", href: "http://mysite.com/img/apple-touch-icon-57x57.png"},
                {rel: "apple-touch-icon", sizes: "72x72", href: "http://mysite.com/img/apple-touch-icon-72x72.png"}
            ]}
            script={[
                {src: "http://include.com/pathtojs.js", type: "text/javascript"},
                {type: "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
            ]}
            noscript={[
                {innerHTML: `<link rel="stylesheet" type="text/css" href="foo.css" />`}
            ]}
            style={[
              {type: "text/css", cssText: "body {background-color: blue;} p {font-size: 12px;}"}
            ]}
            onChangeClientState={(newState) => console.log(newState)}
        />;
        const head = <Helmet title ="My Title"/>
        const meta = {
          title: 'Some Meta Title',
          description: 'I am a description, and I can create multiple tags',
          canonical: 'http://example.com/path/to/page',
          meta: {
            charset: 'utf-8',
            name: {
              keywords: 'react,meta,document,html,tags'
            }
          }
        };
        var test_meta = <DocumentMeta {...meta}/>;
        // const meta_test_1 = DocumentMeta.renderAsHTML();
        console.log(React.renderToStaticMarkup(<DocumentMeta {...meta}/>));

        // console.log(test_head.toComponent());
         // console.log(React.renderToString(head));
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
                this.props.dispatch(addMetatags(component_params.title, component_params.coverImageUrl));
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
        let redux_header = this.props.store.getState()._header;
        let content = "";
        if (redux_header.length > 0) {
            content = "<head>" + redux_header[0] + "</head>";
        }
        console.log(redux_header);
        var num_components = redux_store.length;

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
