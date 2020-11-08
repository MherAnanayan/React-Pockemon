import React, {useState} from "react";
import Modaldetail from '../Modal';
import styled from 'styled-components';

const StyledDiv = styled.div `
    border: 1px solid #e14278;
    width: 320px;
    margin: 10px 10px;
    border-radius: 11px;
    display: flex;
    padding: 5px;
`;

const StyledP = styled.p `
    margin-left: 20px;
    color: lightyellow;
    width: 50%;
    text-transform: capitalize;
    margin: auto;
`;
const StyledLoading = styled.h1`
   
    text-transform: capitalize;
    
`;


const Pokemonitem = ({item}) => {

    const [pokemonimgdata] = useState([item.sprites.front_shiny])
    const [pokemondetailsdata] = useState([item])

    if (item.loading) 
        return <StyledLoading>"Loading..."</StyledLoading>

    return (

        <StyledDiv >

            
            <StyledP>
                {`${item.id}. ${item.name}`}
            </StyledP>
            <img src={pokemonimgdata} alt='pokemon'/>
            {pokemondetailsdata.map(el => {
                return (
                    <Modaldetail
                        key={el.id}
                        data={el} />)
            })}
        </StyledDiv>

    );
}

export default Pokemonitem
