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
            const header_struct = {
                database_id: action.key, 
                component: header, 
                button: action.button, 
                type:'header'
            };
            for (var i = 0; i< state.length; i++) {
                if (state[i].database_id !== undefined && state[i].database_id === action.key) {
                    state.splice(i,1,header_struct);
                    return [
                        ... state,
                    ]
                }
            }
            return [
                ...state,
                header_struct
            ]
         case 'ADD_SUBHEAD':
            const subhead = <Subhead text={action.subhead} />;
            let subhead_struct = {
                database_id: action.key, 
                component: subhead,
                button: action.button, 
                type:'subhead'
            };
            for (var i = 0; i< state.length; i++) {
                if (state[i].database_id !== undefined && state[i].database_id === action.key) {
                    state.splice(i,1,subhead_struct);
                    return [
                        ... state,
                    ]
                }
            }
            return [
                ...state,
                subhead_struct
            ]
        case 'ADD_IMAGE':
            const image = <Image
                                url={action.src}
                                credit={action.credit}
                                caption={action.caption}/>;
            const image_struct = {
                database_id: action.key, 
                component: image, 
                button: action.button, 
                type: 'image'
            };
            for (var i = 0; i< state.length; i++) {
                if (state[i].database_id !== undefined && state[i].database_id === action.key) {
                    state.splice(i,1,image_struct);
                    return [
                        ... state,
                    ]
                }
            }
            return [
                ...state,
                image_struct
            ];
        case 'ADD_QUOTE':
            const quote = <Quote quoteText={action.quoteText} quoteSource={action.quoteSource}/>;
            const quote_struct = {
                database_id: action.key, 
                component: quote,
                button: action.button,
                type: 'quote'
            };
            for (var i = 0; i< state.length; i++) {
                if (state[i].database_id !== undefined && state[i].database_id === action.key) {
                    state.splice(i,1,quote_struct);
                    return [
                        ... state,
                    ]
                }
            }
            return [
                ...state,
                quote_struct
            ];
        case 'ADD_TEXT':
            const text = <TextSection text={action.text}/>;
            const text_struct = {
                database_id: action.key, 
                component: text,
                button: action.button,
                type: 'text',
            };
            for (var i = 0; i< state.length; i++) {
                if (state[i].database_id !== undefined && state[i].database_id === action.key) {
                    state.splice(i,1,text_struct);
                    return [
                        ... state,
                    ]
                }
            }
            return [
                ...state,
                text_struct
            ];
        case 'DELETE_COMPONENT':
            for (var i = 0; i<state.length; i++) {
                if (state[i].database_id !== undefined && state[i].database_id === action.database_id) {
                    state.splice(i,1);
                    return [
                    ...state
                    ]
                }
            }
            return [
                ...state
            ];
        default:
            return state;
    }
}

export function _header(state=[], action) {
    switch (action.type) {
        case 'NEW_HEADER':
            console.log('In New HEADER')
            const title = "<title>" + action.title + "</title>";
            const og_title = '<meta property="og:title"' + action.og_title + '/>';
            const og_image = '<meta property="og:image"' + action.og_image + '/>';
            const og_description = '<meta property="og:og_description"' + action.og_description + '/>';
            const favicon = '<link rel = "icon" type="image/png" href="http://dailybruin.com/img/favicons/favicon-32x32.png" sizes="32x32">';
            const bootstrap = '<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css">'
            const css = '<link rel="stylesheet" type="text/css" href="style.css">';
            const meta_tags = title + og_title + og_image + og_description + favicon + bootstrap + css;

            return [
                ...state,
                meta_tags
            ];
        default:
            // console.log("Not supposed to be here");
            return state;
    }
}