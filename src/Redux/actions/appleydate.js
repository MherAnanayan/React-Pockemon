import axios from 'axios';
import { LOAD_DATA, GET_DATA } from './types'


const currentPageUrl = "https://pokeapi.co/api/v2/pokemon/"


export const fentchData = () => {
    return async dispatch => {
        dispatch({type:LOAD_DATA});
        try{
            const { data } = await axios.get(currentPageUrl);
            const { nextUrl, prevurl, results } = data
            const urlArrays = results.map(el => new Promise((resolve) => resolve(axios.get(el.url))))
            const list = await Promise.all(urlArrays);
        }
        catch(err){
            console.log(err)
        }
                
        // dispatch({
        //     type: GET_DATA,
        //     payload: { nexturl, prevurl, listArray: list.data, loading: false }})
    
}
}






