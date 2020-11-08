import React, {useState} from "react";
import Modal from 'react-modal';
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

const Pokemonimg = styled.img `
     margin: auto;
     width: 50%;
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
const StyledDetails = styled.h5`
   color: silver;
    margin: 2px;
`;


const Modaldetail = ({data}) => {
    const [modalIsOpen,
        setIsOpen] = useState(false)
    let subtitle

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
        subtitle.style.margin = 'auto';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    Modal.setAppElement(document.getElementById('root'));
    console.log(data)
    return (
         <> 
         
         <Modal

        key={data.id}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <Pokemonimg src={data.sprites.front_default} alt='pokemon'/>
        <h2 ref={_subtitle => (subtitle = _subtitle)}>{`${data.id}. ${data.name}`}</h2>
         <StyledDetails>{`1.Type -${data.types[0].type.name} `}</StyledDetails>
         <StyledDetails>{`2.Base-experience - ${data.base_experience}`}</StyledDetails>
         <StyledDetails>{`3.Height - ${data.height}`}</StyledDetails>
         <StyledDetails>{`4.Width - ${data.weight}`}</StyledDetails>

          </Modal> 
        <StyledButton onClick = {openModal} > Details </StyledButton>
        </ >
        )}



export default Modaldetail;
