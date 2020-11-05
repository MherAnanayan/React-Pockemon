import React from 'react';
import styled from 'styled-components';
import Logo from './pockemon.jpg';



const StyledHeader = styled.div`
    width: 100%;
    height: 50px;
    background-color:#f1f1f1;
    border-bottom: 3px solid #e14278;
`;
const StyledImg = styled.img`
margin-left: 50px;
    width: 50px;
`;

const Header = () => {
    return (
        <StyledHeader >
            <StyledImg  src={Logo} alt='Logo' ></StyledImg>
        </StyledHeader>
    )
}


export default Header;