import React from 'react';

class Dashboard extends React.Component {
    static propTypes = {
        componentTypes: React.PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {selectedComponent: this.props.componentTypes[0], 
            type: '', 
            author: '', 
            title: '',
            subheading: '',
            text: '',
            quote: '',
            quoteMaker: '',
            imageUrl: '',
            imageCredit: '',
            imageCaption: ''
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
            <form onSubmit={this.handleSubmit} action='/store_page' method='POST'>
                <div className='component-inputs'>
                    {this.showInputForComponentType(this.state.selectedComponent)}
                </div>
                <br/>
                <select value={this.state.selectedComponent} onChange={this.handleDropdownChange}>
                    {componentOptions}
                </select>
                <input type='submit'></input>
            </form>
          </div>
        );
    }

    handleDropdownChange(event) {
        this.setState({selectedComponent: event.target.value});
        // {this.showInputForComponentType(event.target.value)}
        this.setState({type: event.target.value})
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.selectedComponent);
        event.preventDefault();
        
        var contents = 

        $.ajax({
          url: '/store',
          dataType: 'json',
          // data: this.state.contents;
          type: 'POST'
        });
    }

    showInputForComponentType(componentType) {
        console.log('Dropdown changed: ' + componentType);
        switch(componentType) {
            case 'title':
                return(
                    <div><input placeholder="Title" type="text" name="title" value={this.state.title} className="form-control"/></div>
                );
                break;
            case 'author':
                return(
                    <div><input placeholder="Author" type="text" name="author" required="required" value={this.state.author} className="form-control"/></div>
                );
                break;
            case 'image':
                return(
                    <div>
                        <input placeholder="URL" type="text" name="url" value={this.state.imageUrl} className="form-control"/>
                        <input placeholder="Credit" type="text" name="credit" value={this.state.imageCredit} className="form-control"/>
                        <input placeholder="Caption" type="text" name="caption" value={this.state.imageCaption} className="form-control"/>
                    </div>
                );
                break;
            case 'quote':
                return(
                    <div>
                        <input placeholder="Quote" type="text" name="quote" value={this.state.quote} className="form-control"/>
                        <input placeholder="Quote Maker" type="text" name="quoteMaker" value={this.state.quoteMaker} className="form-control"/>
                    </div>
                );
                break;
            case 'text_section':
                return(
                    <div><textarea name="text" cols="90" rows="8"></textarea></div>
                );
                break;
            default:
                return(<p>nothing</p>);
                break;
        }
    }
    selectFields(type)
    {
        var contents = {};
        switch(type) {
            case 'title':
                contents['title'] = this.state.title;
                break;
            case 'author':
                contents['author'] = this.state.author;
                break;
            case 'image':
                contents['url'] = this.state.imageUrl;
                contents['caption'] = this.state.imageCaption;
                contents['credit'] = this.state.imageCredit;
                break;
            case 'quote':
                contents['quote'] = this.state.quote;
                contents['quoteMaker'] = this.state.quoteMaker;
                break;
            case 'text_section':
                return(
                    <div><textarea name="text" cols="90" rows="8"></textarea></div>
                );
                break;
            default:
                return(<p>nothing</p>);
                break;
        }
        return contents;
    }
};

export default Dashboard;
