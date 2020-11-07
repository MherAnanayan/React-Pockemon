import {LOAD_DATA, GET_DATA} from '../actions/types'


const initialState = {
    loading: false,
    nexUrl: null,
    prevUrl: null,
    listArray: null,
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case LOAD_DATA:
            return {
                ...state,
                loading: true,
            };

        case GET_DATA:
            return payload;
        
        default:
            return state;
    }
}