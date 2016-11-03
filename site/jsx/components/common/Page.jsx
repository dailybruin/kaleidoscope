import React from 'react';

// Super basic component that takes name and age and then prints it
class Page extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Page">
                <p>
                    Title: { this.props.title }
                    <br />
                    Author: { this.props.author }
                </p>
            </div>
        )
    }
};

export default Page;
