import React, {useState, useEffect} from "react";
import Modal from 'react-modal';
import {useDispatch, connect} from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '33%',
        display: 'flex',
        flexFlow: 'column'
    }
};

const StyledDiv = styled.div `
     border: 1px solid #e14278;
    width: 500px;
    margin-bottom: 15px;
       border-radius: 11px;
       display:flex;
`;
const Pokemonimg = styled.img `
     margin: auto;
     width: 50%;
`;
const StyledP = styled.p `
    margin-left: 20px;
    color: lightyellow;
    width: 50%;
    text-transform: capitalize;
    margin: auto;
`;

const StyledButton = styled.button `
   color: #e14278;
    background-color: silver;
    outline: none;
    width: max-content;
    height: fit-content;
    margin: auto;
    border-color: white;
    border-radius:5px;
`;

const Pokemonitem = ({url, name, types}) => {
    const dispatch = useDispatch();
    const [pokemonimgdata, setPokemonimgdata] = useState([])
    const [pokemondetailsdata, setPokemonditailsdata] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [pokemonheight, setPokemonheight] = useState([])
    const [number, setNumber] = useState()
    let subtitle

    // useEffect(() => {
    //     let cancel
    //     const fetchData = async() => {
            
    //         setLoading(true)
    //         const result = await axios.get(url, {
    //             cancelToken: new axios.CancelToken(c => cancel = c)
    //         })
    //         setPokemonimgdata(result.data.sprites.front_default)
    //         setPokemonditailsdata(result.data.base_experience)
    //         setPokemonheight(result.data.height)
    //         setNumber(result.data.id)
    //         setLoading(false)
    //         dispatch(addPokemonDetailsData(result.date))

    //         return () => cancel()
    //     }
    //     fetchData()
    // }, [url])

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    Modal.setAppElement(document.getElementById('root'));

    if (loading) 
        return ""
console.log(types);
    return (

        <StyledDiv >

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <Pokemonimg src={pokemonimgdata} alt='pokemon'/>
                <h2 ref={_subtitle => (subtitle = _subtitle)}>{`${number}. ${name}`}</h2>
                <h5>{`Base-experience - ${pokemondetailsdata}`}</h5>
                <h5>{`Height - ${pokemonheight}`}</h5>
                <form></form>
            </Modal>
            <StyledP>
                {`${number}. ${name}`}
            </StyledP>
            <img src={pokemonimgdata} alt='pokemon'/>
            <StyledButton onClick={openModal}>Details</StyledButton>
        </StyledDiv>

    );
}


export default Pokemonitem

