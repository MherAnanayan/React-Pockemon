import React, {useState, useEffect} from 'react';
import Pockemonitem from '../Pockemonitem/Pockemonitem';
import axios from 'axios';
import './Style.css'

const Pockemonlist = () => {

    const [pockitem, setPockitem] = useState([])

    useEffect(() => {
       const res =  axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
        
            setPockitem([response.data])
                console.log(pockitem)
            })

    }, [])
    console.log(pockitem)
   
    return (
        <div className='pocemonitem-area'>
            {pockitem
                
                .map((item, index) => {
                    return (<Pockemonitem key={item} name={item} index={index + 1}/>)
                })}
        </div>

    )
}

export default Pockemonlist;
