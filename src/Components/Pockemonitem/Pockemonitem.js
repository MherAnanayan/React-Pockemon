import React, {useState, useEffect} from "react";
import Modal from 'react-modal';
import { useDispatch, connect} from 'react-redux';
import {addPockemonDetailsData} from '../../Redux/actions/appleydate';
import axios from 'axios';
import styled from 'styled-components';
import Pockemondate from "../../Redux/reducers/Pockemondate";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
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
const Pockemonimg = styled.img `
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

const Pockemonitem = ({currenturl, url, name, index}) => {
    const dispatch = useDispatch();
    const [currentUrl, setCurrentUrl] = useState(currenturl)
    const [pockemondata, setPockemondata] = useState()
    const [pockemonimgdata, setPockemonimgdata] = useState([])
    const [pockemondetailsdata, setPockemonditailsdata] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [pockemonheight, setPockemonheight] = useState([])
    let subtitle

    useEffect(() => {
        setLoading(true)
        axios.get(url)
            .then(response => {
                setLoading(false)
                setCurrentUrl(url)
                setPockemonimgdata(response.data.sprites.front_default)
                setPockemonditailsdata(response.data.base_experience)
                setPockemonheight(response.data.height)
                setPockemondata(response.data)
                
                
            })
        axios.get("https://pokeapi.co/api/v2/type/")
            .then(response => {
                setLoading(false)
                
                dispatch(addPockemonDetailsData(response.data.results))

            })

    }, ["https://pokeapi.co/api/v2/type/"])
        
            
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

    return (

        <StyledDiv >

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <Pockemonimg src={pockemonimgdata} />
                <h2 ref={_subtitle => (subtitle = _subtitle)}>{`${index}. ${name}`}</h2>
                <h5>{`Base-experience - ${pockemondetailsdata}`}</h5>
                <h5>{`Height - ${pockemonheight}`}</h5>
                <form></form>
            </Modal>
            <StyledP>
                {`${index}. ${name}`}
            </StyledP>
            <img src={pockemonimgdata} />
            <StyledButton onClick={openModal}>Details</StyledButton>
        </StyledDiv>

    );
}

const mapStateToProps = (state) => ({
    types: state,

});

const mapDispatchToProps = {
    addPockemonDetailsData};


export default connect(mapStateToProps, mapDispatchToProps)(Pockemonitem)