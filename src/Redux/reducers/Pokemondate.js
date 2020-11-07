import * as Pokemondata from '../actions/types'


const initialState = {
    pokemonData: {},
    pokemonDetails: {},
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case Pokemondata.ADD_POKEMON_DATA:
            return {
                ...state,
                pokemonData: payload,
            };

        case Pokemondata.ADD_POKEMON_DETAILS_DATA:
            return {
                ...state,
                pokemonDetails: payload,
            };
        
        default:
            return state;
    }
}