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
        {this.showInputForComponentType(event.target.value)}
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.selectedComponent);
        event.preventDefault();
    }

    showInputForComponentType(componentType) {
        console.log('Dropdown changed: ' + event.target.value);
        switch(componentType) {
            case 'image':
                return(
                    <div>
                        <input type="text" name="image" autofocus="autofocus" value="img" class="form-control"/>
                        <input type="text" name="credit" required="required" value="credit" class="form-control"/>
                        <input type="text" name="caption" required="required" value="caption" class="form-control"/>
                    </div>
                );
                break;
            default:
                return(<p>nothing</p>);
                break;
        }
    }
};

export default Dashboard;
