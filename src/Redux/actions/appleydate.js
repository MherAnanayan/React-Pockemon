import { ADD_POKEMON_DATA, ADD_POKEMON_DETAILS_DATA } from './types'

export const addPokemonData = (formData) => {
    return dispatch => {
        return dispatch({
            type: ADD_POKEMON_DATA,
            payload: formData,
        });
    }
}

 export const addPokemonDetailsData = (formData) => {
    return dispatch => {
        return dispatch({
            type: ADD_POKEMON_DETAILS_DATA,
            payload: {formData},
        });
    }
}




