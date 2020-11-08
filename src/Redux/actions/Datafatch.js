import axios from 'axios';
import { useCallback } from 'react';
import {LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR} from './types'


const currentPageUrl = "https://pokeapi.co/api/v2/pokemon/"

export const fetchData = (url = currentPageUrl) => {
    return async dispatch => {
        dispatch({type: LOAD_DATA});
        try {
            const {data} = await axios.get(url);
            const {next, previous, results} = data
            const list = await Promise.all(results.map(async el => {
                let response = await axios.get(el.url);
                return response.data
            }))
            dispatch({
                type: LOAD_DATA_SUCCESS,
                payload: {
                    next,
                    previous,
                    listArray: list,
                    loading: false
                }
            })
        } catch (err) {
            dispatch({type: LOAD_DATA_ERROR, payload: {
                    err
                }})
        }

    }
}
