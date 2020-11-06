import React from 'react'
import styled from 'styled-components';

const PaginationButtonArea = styled.div`
        margin: 10px
`;

const StyledPaginationButton = styled.button`
         margin: 5px;
         border-radius: 5px;
         background-color: #e14278;
         color: whitesmoke;
         border: 1px solid;
`;


const Pagination =({ gotoNextPage, gotoPrevPage }) => {
    return (
        <PaginationButtonArea>
            {gotoPrevPage && <StyledPaginationButton onClick={gotoPrevPage}>Previous</StyledPaginationButton>}
            {gotoNextPage && <StyledPaginationButton onClick={gotoNextPage}>Next</StyledPaginationButton>}
        </PaginationButtonArea>
    )
}


export default  Pagination