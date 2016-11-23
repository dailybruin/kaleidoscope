import React from 'react';
import Image from '../components/common/Image';
import Quote from '../components/common/Quote';
import Subhead from '../components/common/Subhead'
import TextSection from '../components/common/TextSection';

export function  _dashboard(state = [], action) {
    switch (action.type) {
        case 'ADD_NEW_COMPONENT':
            return {
                ...state,
                message: action.value
            }
        case 'ADD_IMAGE':
            const image = <Image
                                url={action.src}
                                credit={action.credit}
                                caption={action.caption}
                            />;
            return [
                ...state,
                image
            ];
        case 'ADD_QUOTE':
            const quote = <Quote quoteText={action.quoteText} quoteSource={action.quoteSource}/>;
            return [
                ...state,
                quote
            ];

        case 'ADD_SUBHEAD':
            const subhead = <Subhead subheadText={action.text} />;
            return [
                ...state,
                subhead
            ];
        
        case 'ADD_TEXT':
            const text = <TextSection text={action.text}/>;
            return [
                ...state,
                text
            ];
        default:
            return state;
    }
}