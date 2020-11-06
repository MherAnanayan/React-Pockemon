import React, {useState, useEffect} from 'react';
import Pockemonitem from '../Pockemonitem/Pockemonitem';
import { useDispatch, connect} from 'react-redux';
import {addPockemonData} from '../../Redux/actions/appleydate';
import Pagination from '../Pagination'
import axios from 'axios';
import './Style.css';
import styled from 'styled-components';

const Styledpockemonarea = styled.div`
    width: 500px;
    display: flex;
    background-color: lightgrey;
    border-bottom: 1px solid beige;
`;
const Styledbuttonsarea = styled.div`
    margin:auto;
`;
const Styledfilterbutton = styled.button`
    margin:5px;
    background-color:#e14278;
    border-color:white;
    outline: none;
`;
const Styledfiltrtext = styled.p`
     margin-left: 15px;
       color: seashell;
       font-size: 15px;
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
        axios.get(currentPageUrl, {
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            .then(response => {
                setLoading(false)
                setData(response.data)
                setNextPageUrl(response.data.next)
                setPrevPageUrl(response.data.previous)
                dispatch(addPockemonData(data))
                
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
    
    
 
    if (loading) return "Loading..."
    

    return (
        <div className='pocemonitem-area'>
            <Styledpockemonarea>
                <Styledfiltrtext>Filtration by</Styledfiltrtext>
                <Styledbuttonsarea>
                    <Styledfilterbutton >ALL</Styledfilterbutton>
                    <Styledfilterbutton >Bug</Styledfilterbutton>
                    <Styledfilterbutton >Grass</Styledfilterbutton>
                    <Styledfilterbutton >ALL</Styledfilterbutton> 
                    <Styledfilterbutton >Fire</Styledfilterbutton>
                    <Styledfilterbutton >Normal</Styledfilterbutton>
                    <Styledfilterbutton >flying</Styledfilterbutton> 
               </Styledbuttonsarea>
                
            </Styledpockemonarea>
            <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
            {data
                .results
                .map((item, index) => {
                    return (
                    <Pockemonitem 
                           currenturl={currentPageUrl}
                           url={item.url} 
                           key={index} 
                           name={item.name} 
                           index={index + 1}/>)
                })}

            <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
          
        </div>

    )
}
const mapStateToProps = (state) => ({
    types: state,
    
});

const mapDispatchToProps = {
    addPockemonData
};


export default connect(mapStateToProps,mapDispatchToProps)(Pockemonlist);
