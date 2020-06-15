import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from './auth';
import { Signup } from './signup';
import { Contacts } from './contact'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            signup: Signup,
            contacts: Contacts
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}