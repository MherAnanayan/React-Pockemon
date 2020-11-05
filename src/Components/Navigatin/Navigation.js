import React from 'react';
import Button from '@material-ui/core/Button';
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
                <Button  size="small" color="primary">ALL</Button>
                <Button size="small" color="secondary">ALL</Button>
                <Button size="small" color="primary">ALL</Button>
                <Button size="small" color="primary">ALL</Button>
            </StyledDiv>
        
        
    )
}


export default Navigation;