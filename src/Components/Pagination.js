import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components';
import {fetchData} from '../Redux/actions/Datafatch';

const PaginationButtonArea = styled.div `
    background-color: silver;
    display: flex;
    justify-content: center;
    height: 54px;
`;

const StyledPaginationButton = styled.button `
         margin: 10px;
    border-radius: 5px;
    background-color: inherit;
    color: #e14278;
    border: 1px solid;
    height: 33px;
    width: 70px;
    outline: none;
`;

const Pagination = ({next, previous, fetchData}) => {
    return (
        <PaginationButtonArea>
            {previous && <StyledPaginationButton onClick={() => fetchData(previous)}>Previous</StyledPaginationButton>}
            {next && <StyledPaginationButton onClick={() => fetchData(next)}>Next</StyledPaginationButton>}
        </PaginationButtonArea>
    )
}

const mapStateToProps = (state) => (
    {  
        next: state.Pokemondata.next, 
        previous: state.Pokemondata.previous
    });

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);