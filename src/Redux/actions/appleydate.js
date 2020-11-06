import { ADD_POCKEMON_DATA, ADD_POCKEMON_DETAILS_DATA } from './types'

export const addPockemonData = (formData) => {
    return dispatch => {
        return dispatch({
            type: ADD_POCKEMON_DATA,
            payload: formData,
        });
    }
}

 export const addPockemonDetailsData = (formData) => {
    return dispatch => {
        return dispatch({
            type: ADD_POCKEMON_DETAILS_DATA,
            payload: formData,
        });
    }
}




