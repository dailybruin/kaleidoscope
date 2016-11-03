import React from 'react';

// Super basic component that takes name and age and then prints it
class User extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        age: React.PropTypes.number.isRequired
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="User">
                <p>
                    Name: { this.props.name }
                    <br />
                    Age: { this.props.age }
                </p>
            </div>
        )
    }
};

export default User;
