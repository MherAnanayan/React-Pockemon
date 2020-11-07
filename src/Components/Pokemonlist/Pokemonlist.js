import React, {useState, useEffect} from 'react';
import Pokemonitem from '../Pokemonitem/Pokemonitem';
import {useDispatch, connect} from 'react-redux';
import {addPokemonData} from '../../Redux/actions/appleydate';
import Pagination from '../Pagination'
import axios from 'axios';
import styled from 'styled-components';

const Styledpokemonarea = styled.div `
    display: flex;
    padding: 30px;
    flex-flow: column;
    justify-content: center;
    background-color: #cccccc;
    align-items: center;
`;

const Pokemonlist = (props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({results: []})
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let cancel
        const fetchData = async() => {
            setLoading(true)
            const result = await axios.get(currentPageUrl, {
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            
            setData(result.data)
            setNextPageUrl(result.data.next)
            setPrevPageUrl(result.data.previous)
            setLoading(false)
            dispatch(addPokemonData(result.data))

            return () => cancel()
        }
        fetchData()
    }, [currentPageUrl])

    const gotoNextPage = () => {
        setCurrentPageUrl(nextPageUrl)
        dispatch(addPokemonData(data))
    }

    const gotoPrevPage = () => {
        setCurrentPageUrl(prevPageUrl)
        dispatch(addPokemonData(data))
    }

    if (loading) 
        return "Loading..."

    return (
        <Styledpokemonarea>
            <Pagination
                gotoNextPage={nextPageUrl
                ? gotoNextPage
                : null}
                gotoPrevPage={prevPageUrl
                ? gotoPrevPage
                : null}/> {data
                .results
                .map((item, index) => {
                    return (<Pokemonitem
                        currenturl={currentPageUrl}
                        url={item.url}
                        key={index}
                        name={item.name}
                        index={index + 1}/>)
                })}

            <Pagination
                gotoNextPage={nextPageUrl
                ? gotoNextPage
                : null}
                gotoPrevPage={prevPageUrl
                ? gotoPrevPage
                : null}/>

        </Styledpokemonarea>

    )
}

const mapStateToProps = (state) => ({types: state.Pokemondate.pokemonDetails.formData});

const mapDispatchToProps = {
    addPokemonData
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemonlist);
