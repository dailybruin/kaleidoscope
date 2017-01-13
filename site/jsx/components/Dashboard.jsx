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
    }

    render() {
        //console.log('state payload', this.state.data.payload);
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
                type: event.target.value,
                payload: {}
            }
        })
    }

    handleSubmit(event) {
        console.log('A component was submitted: ' + this.state.data.type);
        event.preventDefault();
        console.log('data type: ', this.state.data.type)
        console.log('state.data: ', this.state.data)
        const data = this.state.data.payload;

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
        })
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
                            value={this.state.data.payload.title}/>
                        <input
                            placeholder="Author"
                            type="text" name="author"
                            onChange={this.updateInput.bind(this, 'author')}
                            className="form-control"
                            value={this.state.data.payload.author}/>
                        <input
                            placeholder="Cover image URL"
                            type="text" name="url"
                            onChange={this.updateInput.bind(this, 'coverImageUrl')}
                            className="form-control"
                            value={this.state.data.payload.coverImageUrl}/>
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
                            value={this.state.data.payload.subhead}
                        />
                    </div>
                );
            case 'image':
                return(
                    <div>
                        <input 
                            placeholder="URL" type="text" name="url"
                            onChange={this.updateInput.bind(this, 'imageUrl')}
                            className="form-control"
                            value={this.state.data.payload.imageUrl}/>
                        <input
                            placeholder="Credit" type="text" name="credit" 
                            onChange={this.updateInput.bind(this, 'credit')}
                            className="form-control"
                            value={this.state.data.payload.credit}/>
                        <input
                            placeholder="Caption" type="text" name="caption"
                            onChange={this.updateInput.bind(this, 'caption')}
                            className="form-control"
                            value={this.state.data.payload.caption}/>
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
                            value={this.state.data.payload.quoteText} />
                        <input 
                            placeholder="Quote Maker" 
                            type="text" 
                            name="quoteMaker" 
                            onChange={this.updateInput.bind(this, 'quoteSource')} 
                            className="form-control"
                            value={this.state.data.payload.quoteSource} />
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
