import React from 'react';
import Image from './Image';
import Quote from './Quote';
import {connect} from 'react-redux';

// Super basic component that takes name and age and then prints it
class Page extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        authors: React.PropTypes.array.isRequired,
        coverPhoto: React.PropTypes.array.isRequired,
        subheading: React.PropTypes.string.isRequired,
        mainImages: React.PropTypes.array.isRequired,
        sideImages: React.PropTypes.array.isRequired,
        quotes: React.PropTypes.array.isRequired,
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

                <div className="cover-top">
                    { this.props.coverPhoto.map(function(im){
                            return (
                                <div className="cover-photo">
                                    <Image url={im['url']} credit={im['credit']} caption={im['caption']}/>
                                </div>
                                );
                        })
                    }

                    <div className="title-wrapper">
                        <h1>
                            { this.props.title }
                        </h1>

                            <p>
                            Author: { this.props.authors.map(function(au){
                                    return {au};
                                })
                            }
                            </p>

                            <p>
                            Subheading: { this.props.subheading }
                            </p>
                    </div>                    
                    

                </div>
                <div className="page-content">

                    Quote: { this.props.quotes.map(function(qo){
                                return <Quote quote={qo['quote']} quoteMaker={qo['quoteMaker']} />;
                        })
                    }

                    { this.props.sideImages.map(function(im){
                            return (
                                <div className="side-photo">
                                    <Image url={im['url']} credit={im['credit']} caption={im['caption']}/>
                                </div>
                            );
                        })
                    }

                </div>                
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
