import React from 'react';
import ImageObject from './ImageObject';


export function  _dashboard(state = {}, action) {
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
            const product = 
                Object.assign({}, state, {
                                src: action.src,
                                credit: action.credit,
                                caption: action.caption,
                            });
            console.log('looking at state before modifying');
            console.log(state);
            console.log('looking at what dispatch returns');
            console.log(product);
            return product;
            // return (Object.assign({}, state, {
            //     src: action.src,
            //     credit: action.credit,
            //     caption: action.caption,
            // }));

        default:
            return state;
    }
}