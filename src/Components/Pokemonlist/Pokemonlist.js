import React, {useEffect} from 'react';
import Pokemonitem from '../Pokemonitem/Pokemonitem';
import { connect} from 'react-redux';
import { fetchData} from '../../Redux/actions/appleydate';
import Pagination from '../Pagination'
import styled from 'styled-components';

const Styledpokemonarea = styled.div `
    display: flex;
    padding: 30px;
    flex-flow: wrap;
    justify-content: center;
    background-color: #cccccc;
    align-items: center;
    min-height: 400px;
    
`;
const StyledLoading = styled.h1`
   
   justify-content: center;
    margin: auto;
    width: 100%;
    display: flex;
    background-color: silver;
    
`;

const Pokemonlist = ({data, fetchData }) => {
    const {next, previous, listArray, loading, error } = data
    
    useEffect(() => {
        fetchData();
    }, [])

    
    
    const Loading = <StyledLoading>Loading...</StyledLoading>

    if (error) return error    

    return (
        <>
        <Pagination /> 
            <Styledpokemonarea>

                {!loading ?  listArray.length &&
                    listArray
                        .map((item) => {
                            return (<Pokemonitem
                                key={item.id}
                                item={item}

                            />)
                        }):Loading}

            </Styledpokemonarea>
        
        <Pagination />
    </>
    )
}

const mapStateToProps = (state) => ({data: state.Pokemondata});

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemonlist);
