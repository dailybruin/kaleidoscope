import React from 'react';
import ImageObject from '../components/common/ImageObject';


export function  _dashboard(state = [], action) {
    switch (action.type) {
        case 'ADD_NEW_COMPONENT':
            return {
                ...state,
                message: action.value
            }
         case 'ADD_IMAGE':
            console.log('In add image dispatch');
            const image = <ImageObject
                                url={action.src}
                                credit={action.credit}
                                caption={action.caption}
                            />;
            return [
                ...state,
                image
            ];
        default:
            return state;
    }
}