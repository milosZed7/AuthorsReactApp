import { combineReducers } from 'redux';
import * as Types from './actionTypes';

const ERRORS_DEFAULT_STATE = { firstName: '', lastName: '' };
const getAuthors = (state = [], action) => {
    if (action.type === Types.GET_AUTHORS) {
        return action.payload;
    }
    return state;
};

const authorErrors = (state = ERRORS_DEFAULT_STATE, action) => {
    if (action.type === Types.SET_AUTHOR_ERRORS) {
        return {
            ...state,
            ...action.payload
        };
    }
    if (action.type === Types.RESET_AUTHOR) {
        return ERRORS_DEFAULT_STATE;
    }
    return state;
};

const authorData = (state = { id: '', firstName: '', lastName: '' }, action) => {
    if (action.type === Types.SET_AUTHOR_DATA) {
        const field = action.payload.name;
        const value = action.payload.value;
        const newState = Object.assign({}, state, {
            [field]: value
        });
        return newState;
    }
    if (action.type === Types.GET_AUTHOR_BY_ID) {
        return action.payload;
    }
    if (action.type === Types.RESET_AUTHOR) {
        return action.payload;
    }
    return state;
};

const rootReducers = combineReducers({
    authors: getAuthors,
    author: authorData,
    errors: authorErrors
});

export default rootReducers;