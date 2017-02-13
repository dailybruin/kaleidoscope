import React from 'react';
import Header from './Header';
import Subhead from './Subhead';
import Image from './Image';
import Quote from './Quote';
import TextSection from './TextSection';
import {connect} from 'react-redux';

// Super basic component that takes name and age and then prints it
class Page extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        image: React.PropTypes.array.isRequired,
        quote: React.PropTypes.array.isRequired,
        text: React.PropTypes.string,
    }
    constructor(props) {
        super(props);

        this.deactivateDashboard = this.deactivateDashboard.bind(this);
    }
    render() {
        // Show only the component. Don't show database_id that is saved in the store
        let redux_store = this.props.store.getState()._dashboard;
        var num_components = redux_store.length;
        var components = [];
        for (var i = 0; i < num_components; i++) {
            components.push(redux_store[i].component);
        }

        return (
            <div className="page-container" onClick={this.deactivateDashboard}>
                {components}
            </div>
        );
    }

    deactivateDashboard(){
        let app = document.querySelector('.app-container');
        app.classList.add('preview');
    }
};

const mapStateToProps = (state) => {
	return {
		components: state._dashboard
	}
}

const ConnnectedPage = connect(mapStateToProps)(Page)

export default ConnnectedPage;
