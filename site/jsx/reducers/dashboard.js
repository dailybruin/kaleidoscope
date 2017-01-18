import React from 'react';
import Header from '../components/common/Header';
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
            };
        case 'ADD_HEADER':
            const header = <Header  title={action.title}
                                    author={action.author}
                                    image={action.url}/>;
            const header_struct = {database_id: action.key, component: header};
            return [
                ...state,
                header_struct
            ]
         case 'ADD_SUBHEAD':
            const subhead = <Subhead text={action.subhead} />;
            let subhead_struct = {database_id: action.key, component: subhead};
            return [
                ...state,
                subhead_struct
            ]
        case 'ADD_IMAGE':
            const image = <Image
                                url={action.src}
                                credit={action.credit}
                                caption={action.caption}/>;
            const image_struct = {database_id: action.key, component: image};
            return [
                ...state,
                image_struct
            ];
        case 'ADD_QUOTE':
            const quote = <Quote quoteText={action.quoteText} quoteSource={action.quoteSource}/>;
            const quote_struct = {database_id: action.key, component: quote};
            return [
                ...state,
                quote_struct
            ];
        case 'ADD_TEXT':
            const text = <TextSection text={action.text}/>;
            const text_struct = {database_id: action.key, component: text};
            return [
                ...state,
                text_struct
            ];
        default:
            return state;
    }
}