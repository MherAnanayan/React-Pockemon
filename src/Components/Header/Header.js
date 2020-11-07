import React from 'react';
import styled from 'styled-components';
import Plogo from './Plogo.jpg';



const StyledHeader = styled.div`
    width: 100%;
    height: 60px;
    background-color:#f1f1f1;
    border-bottom: 3px solid #e14278;
`;
const StyledImg = styled.img`
margin-left: 50px;
    width: 60px;
`;

const Header = () => {
    return (
        <StyledHeader >
            <StyledImg  src={Plogo} alt='Logo' ></StyledImg>
        </StyledHeader>
    )
}


export default Header;