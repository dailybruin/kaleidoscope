import React from 'react';

class Dashboard extends React.Component {
    static propTypes = {
        componentTypes: React.PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {selectedComponent: this.props.componentTypes[0]};
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
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.selectedComponent);
        event.preventDefault();
        
        $.ajax({
          url: '/store',
          dataType: 'json',
          type: 'POST'
        });
    }

    showInputForComponentType(componentType) {
        console.log('Dropdown changed: ' + componentType);
        switch(componentType) {
            case 'title':
                return(
                    <div><input type="text" name="title" className="form-control"/></div>
                );
                break;
            case 'author':
                return(
                    <div><input type="text" name="authors" required="required" className="form-control"/></div>
                );
                break;
            case 'image':
                return(
                    <div>
                        <input type="text" name="image" className="form-control"/>
                        <input type="text" name="credit" className="form-control"/>
                        <input type="text" name="caption" className="form-control"/>
                    </div>
                );
                break;
            case 'quote':
                return(
                    <div>
                        <input type="text" name="quote" className="form-control"/>
                        <input type="text" name="quoteMaker" className="form-control"/>
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
};

export default Dashboard;
