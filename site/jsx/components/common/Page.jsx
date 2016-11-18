import React from 'react';
import Image from './Image';
import Quote from './Quote';
import {connect} from 'react-redux';

// Super basic component that takes name and age and then prints it
class Page extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        image: React.PropTypes.array.isRequired,
        quote: React.PropTypes.array.isRequired,
        text: React.PropTypes.string
    }
    constructor(props) {
        super(props);
    }
    render() {
    	let caption = "";
    	let src = "";
    	let credit ="";
    	var check1 = this.props.store.getState()._dashboard;
    	if (check1.caption !== undefined && check1.caption !== null){
    		 caption= check1.caption;
    		 credit = check1.credit;
    		 src = check1.src;
    	}

        return (
            <div className="Page">
                <p>
                	{this.props.store.getState()._dashboard}
                	<br />
                    Title: { this.props.title }
                    <br />
                    Author: { this.props.author }
                </p>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
	return {
		components: state._dashboard
	}
}

const ConnnectedPage = connect(mapStateToProps)(Page)

export default ConnnectedPage;
