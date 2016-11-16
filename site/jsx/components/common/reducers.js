import React from 'react';
import ImageObject from './ImageObject';

var initialState = {}
export function  _dashboard(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NEW_COMPONENT':
            return {
                ...state,
                message: action.value
            }
         case 'ADD_IMAGE':
            console.log('In add image dispatch');
            console.log(action);
            const image = <ImageObject
                                url={action.src}
                                credit={action.credit}
                                caption={action.caption}
                            />;
            return (Object.assign({}, state, {
                src: action.src,
                credit: action.credit,
                caption: action.caption,
            }));
        default:
            return state;
    }
}