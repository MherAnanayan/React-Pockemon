import * as Pockemondata from '../actions/types'


const initialState = {
    pockemonData: {},
    pockemonDetails: {},
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case Pockemondata.ADD_POCKEMON_DATA:
            return {
                ...state,
                pockemonData: payload,
            };

        case Pockemondata.ADD_POCKEMON_DETAILS_DATA:
            return {
                ...state,
                pockemonDetails: payload,
            };
        
        default:
            return state;
    }
}