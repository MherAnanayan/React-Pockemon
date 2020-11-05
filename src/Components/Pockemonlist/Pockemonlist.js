import React from 'react';
import Pockemonitem from '../Pockemonitem/Pockemonitem';
import './Style.css'


const Pockemonlist = () => {

    const Arr = [1, 2, 3, 4, 5, 6,7,8,9,10];

    return (
        
        <div className='pocemonitem-area'>
            {Arr.map(i=> <Pockemonitem key={i} id={i}/>)}
        </div>
      
    )
}
    

export default Pockemonlist;
