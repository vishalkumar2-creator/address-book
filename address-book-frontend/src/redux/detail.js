import * as ActionTypes from './ActionTypes';

export const Details = (state = {
    contact:[]
},action) => {
    switch(action.type) {
        case ActionTypes.ADD_CONTACT:
            return {
                ...state,
                contact:action.payload
            };
        default:
            return state
    }
}