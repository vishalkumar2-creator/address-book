import * as ActionTypes from './ActionTypes';

export const Signup = (state = {
    isLoading: true,
    errMess: null,
    user: null,
    status: null
}, action) => {
    switch (action.types) {
        case ActionTypes.SIGNUP_REQUEST:
            return { ...state, isLoading: true, errMess: null, user: action.user };
        case ActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errMess: '',
                status: action.response
            };
        case ActionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }

}