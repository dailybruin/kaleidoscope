import React from 'react';
import ImageObject from './ImageObject';
import QuoteObject from './QuoteObject';

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
        return (
            <div className="Page">

                <div className="cover-top">
                    { this.props.coverPhoto.map(function(im){
                            return (
                                <div className="cover-photo">
                                    <ImageObject url={im['url']} credit={im['credit']} caption={im['caption']}/>
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
                                return <QuoteObject quote={qo['quote']} quoteMaker={qo['quoteMaker']} />;
                        })
                    }

                    { this.props.sideImages.map(function(im){
                            return (
                                <div className="side-photo">
                                    <ImageObject url={im['url']} credit={im['credit']} caption={im['caption']}/>
                                </div>
                            );
                        })
                    }

                </div>
                
            </div>
        );
    }
};

export default Page;
