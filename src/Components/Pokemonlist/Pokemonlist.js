import React, {useState, useEffect} from 'react';
import Pokemonitem from '../Pokemonitem/Pokemonitem';
import {useDispatch, connect} from 'react-redux';
import { addPokemonData, fentchData} from '../../Redux/actions/appleydate';
import Pagination from '../Pagination'
import styled from 'styled-components';

const Styledpokemonarea = styled.div `
    display: flex;
    padding: 30px;
    flex-flow: column;
    justify-content: center;
    background-color: #cccccc;
    align-items: center;
`;

const Pokemonlist = ({nextUrl, prevUrl, listArray, loading, fentchData}) => {


    useEffect(() => {
        fentchData();
    }, [])
    
    console.log(nextUrl);
    console.log(prevUrl);
    console.log(listArray);


    if (loading) 
        return "Loading..."

    return (
        <Styledpokemonarea>
            {/* <Pagination
                gotoNextPage={nextPageUrl
                ? gotoNextPage
                : null}
                gotoPrevPage={prevPageUrl
                ? gotoPrevPage
                : null}/> {data
                .results
                .map((item, index) => {
                    return (<Pokemonitem
                        url={item.url}
                        key={index}
                        name={item.name}
                        />)
                })}

            <Pagination
                gotoNextPage={nextPageUrl
                ? gotoNextPage
                : null}
                gotoPrevPage={prevPageUrl
                ? gotoPrevPage
                : null}/> */}

        </Styledpokemonarea>

    )
}

const mapStateToProps = (state) => ({data: state.Pokemondate});

const mapDispatchToProps = {
    fentchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemonlist);
