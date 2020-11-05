import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
     border: 1px solid #e14278;
    width: 500px;
    margin-bottom: 15px;
       border-radius: 11px;
       display:flex;
`;
const StyledP = styled.p`
    margin-left: 20px;
    color: lightyellow;
    width: 74%;
    text-transform: capitalize;
`;

const StyledButton = styled.button`
   color: #e14278;
    background-color: silver;
    outline: none;
    width: max-content;
    height: fit-content;
    margin: auto;
    border-color: white;
    border-radius:5px;
`;

const Pockemonitem = (props) => {
  
    return (
    
            <StyledDiv>
                <img  alt='img'></img>
                <StyledP>
                {`${props.index}. ${props.name}`}
                </StyledP>
                <StyledButton>Details</StyledButton>
            </StyledDiv>
        
    );
}

export default Pockemonitem