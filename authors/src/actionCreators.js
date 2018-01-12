import * as Types from './actionTypes';
import AuthorApi from './api/authorApi';

export function getAuthors() {
    return {
        type: Types.GET_AUTHORS,
        payload: AuthorApi.getAllAuthors()
    };
}

export function setAuthorErrors(error) {
    return {
        type: Types.SET_AUTHOR_ERRORS,
        payload: error
    };
}

export function setAuthorData(name, value) {
    return {
        type: Types.SET_AUTHOR_DATA,
        payload: { name, value }
    };
}

export function getAuthorById(id) {
    return {
        type: Types.GET_AUTHOR_BY_ID,
        payload: AuthorApi.getAuthorById(id)
    };
}

export function resetAuthor() {
    return {
        type: Types.RESET_AUTHOR,
        payload: { id: '', firstName: '', lastName: '' }
    };
}