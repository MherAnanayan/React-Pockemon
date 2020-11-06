import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    background-color: lightgrey;
    border-bottom: 1px solid beige;
`;
const StyledP = styled.p`
     margin-left: 100px;
       color: seashell;
       font-size: 15px;
`;

const Navigation = () => {
    return (
        
            <StyledDiv>
            <StyledP>Filtration by</StyledP>
                <button  size="small" color="primary">ALL</button>
                <button size="small" color="secondary">ALL</button>
                <button size="small" color="primary">ALL</button>
                <button size="small" color="primary">ALL</button>
            </StyledDiv>
        
        
    )
}


export default Navigation;