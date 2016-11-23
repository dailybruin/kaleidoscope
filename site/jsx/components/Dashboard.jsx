import React from 'react';
import {connect} from 'react-redux';
import {addImage, addQuote, addText} from '../actions';


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
        console.log('A component was submitted: ' + this.state.data.type);
        event.preventDefault();
        console.log(this.state.data.type)
        console.log(this.state.data)
        const data = this.state.data;
        switch (this.state.data.type) {
            case "image":
                this.props.dispatch(addImage(
                        data.imageUrl,
                        data.imageCaption,
                        data.imageCredit,
                    ));
                break;
            case "quote":
                this.props.dispatch(addQuote(data.quoteText, data.quoteSource));
                break;
            case "text_section":
                this.props.dispatch(addText(data.text));
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
