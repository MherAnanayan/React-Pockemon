import React from 'react';
import Button from '@material-ui/core/Button';
import './Style.css'

const Navigation = () => {
    return (
        
            <div className='navigation-area'>
                <p className='nav-text-area'>Serch by</p>
               <Button  size="small" color="beige">ALL</Button>
                <Button size="small" color="secondary">ALL</Button>
                <Button size="small" color="primary">ALL</Button>
                <Button size="small" color="primary">ALL</Button>
            </div>
        
        
    )
}


export default Navigation;