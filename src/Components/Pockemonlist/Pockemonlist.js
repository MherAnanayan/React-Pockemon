import React, {useState, useEffect} from 'react';
import Pockemonitem from '../Pockemonitem/Pockemonitem';
import {useDispatch, connect} from 'react-redux';
import {addPockemonData} from '../../Redux/actions/appleydate';
import Pagination from '../Pagination'
import axios from 'axios';
import styled from 'styled-components';

const Styledpockemonarea = styled.div `
    display: flex;
    padding: 30px;
    flex-flow: column;
    justify-content: center;
    background-color: #cccccc;
    align-items: center;
`;

const Pockemonlist = (props) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({results: []})
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        let cancel
        axios
            .get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
            .then(response => {
                setLoading(false)
                setData(response.data)
                setNextPageUrl(response.data.next)
                setPrevPageUrl(response.data.previous)
                dispatch(addPockemonData(response.data))
            })

        return () => cancel()
    }, [currentPageUrl])

    const gotoNextPage = () => {
        setCurrentPageUrl(nextPageUrl)
        dispatch(addPockemonData(data))
    }

    const gotoPrevPage = () => {
        setCurrentPageUrl(prevPageUrl)
        dispatch(addPockemonData(data))
    }

   

    if (loading) 
        return "Loading..."

    return (
        <Styledpockemonarea>
            <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}/> 
                {data.results
                .map((item, index) => {
                    return (<Pockemonitem
                        currenturl={currentPageUrl}
                        url={item.url}
                        key={index}
                        name={item.name}
                        index={index + 1}/>)
                })}

            <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}/>

        </Styledpockemonarea>

    )
}

const mapStateToProps = (state) => ({types: state.Pockemondate.pockemonDetails.formData});

const mapDispatchToProps = {
    addPockemonData
};

export default connect(mapStateToProps, mapDispatchToProps)(Pockemonlist);
