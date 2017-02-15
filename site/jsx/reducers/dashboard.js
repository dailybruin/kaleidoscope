import React from 'react';
import Header from '../components/common/Header';
import Image from '../components/common/Image';
import Quote from '../components/common/Quote';
import Subhead from '../components/common/Subhead'
import TextSection from '../components/common/TextSection';
import DashboardItem from '../components/common/DashboardItem';

function updateState (state, id, component) {
    for (var i =0; i< state.length; i++) {
        if (state[i].props.database_id === id){
            state.splice(i,1,component);
            return [
                ...state
            ]
        }
     }
    return [
        ...state,
        component
    ]
}

function createDashboardItem(component, button, database_id,type) {
    return (
            <DashboardItem
                component={component}
                database_id={database_id}
                button={button}
                type={type}/>
        );
}

export function  _dashboard(state = [], action) {
    switch (action.type) {
        case 'ADD_HEADER':
            const header = <Header  title={action.title}
                                    author={action.author}
                                    image={action.url}/>;
            let compound_header = <DashboardItem
                        component={header}
                        database_id={action.key}
                        type={action.comp_type}
                        button={action.button}/>
            return updateState(state,action.key,compound_header);
         case 'ADD_SUBHEAD':
            const subhead = <Subhead text={action.subhead} />;
            const compound_subhead = <DashboardItem
                        component={subhead}
                        database_id={action.key}
                        type={action.comp_type}
                        button={action.button}/>
            return updateState(state,action.key, compound_subhead)
        case 'ADD_IMAGE':
            const image = <Image
                                url={action.src}
                                credit={action.credit}
                                caption={action.caption}/>;
            let compound_image = <DashboardItem
                        component={image}
                        database_id={action.key}
                        type={action.comp_type}
                        button={action.button}
                    />;
            return updateState(state,action.key,compound_image);
        case 'ADD_QUOTE':
            const quote = <Quote quoteText={action.quoteText} quoteSource={action.quoteSource}/>;
            const compound_quote = <DashboardItem
                        component={quote}
                        database_id={action.key}
                        type={action.comp_type}
                        button={action.button}
                    />;
            return updateState(state,action.key, compound_quote);
        case 'ADD_TEXT':
            const text = <TextSection text={action.text}/>;
            const compound_text = <DashboardItem
                        component={text}
                        database_id={action.key}
                        type={action.comp_type}
                        button={action.button}
                    />;
            return updateState(state,action.key,compound_text);
        case 'DELETE_COMPONENT':
            for (var i = 0; i<state.length; i++) {
                if (state[i].props.database_id === action.database_id) {
                    state.splice(i,1);
                    return [
                    ...state
                    ]
                }
            }
            return [
                ...state
            ];
        case 'UPDATE_COMPONENT_LIST':
            return action.new_list;
        default:
            return state;
    }
}

export function _header(state=[], action) {
    switch (action.type) {
        case 'NEW_HEADER':
            console.log('In New HEADER')
            const title = "<title>" + action.title + "</title>";
            const og_title = '<meta property="og:title" content="' + action.og_title + '"/>';
            const og_image = '<meta property="og:image" content="' + action.og_image + '"/>';
            const og_description = '<meta property="og:description" content="' + action.og_description + '"/>';
            const favicon = '<link rel = "icon" type="image/png" href="http://dailybruin.com/img/favicons/favicon-32x32.png" sizes="32x32">';
            const bootstrap = '<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css">'
            const css = '<link rel="stylesheet" type="text/css" href="style.css">';
            const meta_tags = title + og_title + og_image + og_description + favicon + bootstrap + css;
            const metatag_struct = {
                database_id: action.key,
                tags: meta_tags,
            }
            return [
                ...state,
                metatag_struct,
            ];
        case 'RESET_HEADER':
            if (state.length === 1)
                return [];
            for (var i = 0; i< state.length; i++) {
                if (state[i].database_id === action.key) {
                    state.splice(i,1);
                    return [
                        ...state
                    ];
                }
            }
            return [
                ...state,
            ];
        default:
            // console.log("Not supposed to be here");
            return state;
    }
}