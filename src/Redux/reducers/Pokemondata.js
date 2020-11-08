import {LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR} from '../actions/types'


const initialState = {
    loading: false,
    next: null,
    previous: null,
    listArray: [],
    error: null
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case LOAD_DATA:
            return {
                ...state,
                loading: true,
            };

        case LOAD_DATA_SUCCESS:
            return payload;

        case LOAD_DATA_ERROR:
            return {
                ...state,
                error: payload.error,
                loading: false,
            };
        
        default:
            return state;
    }
}