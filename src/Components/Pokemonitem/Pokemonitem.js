import React, {useState, useEffect} from "react";
import Modal from 'react-modal';
import {useDispatch, connect} from 'react-redux';
import {addPokemonDetailsData} from '../../Redux/actions/appleydate';
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

const Pokemonitem = ({currenturl, url, name, index}) => {
    const dispatch = useDispatch();
    const [pokemondata, setPokemondata] = useState()
    const [pokemonimgdata, setPokemonimgdata] = useState([])
    const [pokemondetailsdata, setPokemonditailsdata] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [pokemonheight, setPokemonheight] = useState([])
    let subtitle

    useEffect(() => {
<<<<<<< HEAD:src/Components/Pokemonitem/Pokemonitem.js
        let cancel
        const fetchData = async() => {
            
            setLoading(true)
            const result = await axios.get(url, {
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            setPokemonimgdata(result.data.sprites.front_default)
            setPokemonditailsdata(result.data.base_experience)
            setPokemonheight(result.data.height)
            setPokemondata(result.data)
            setLoading(false)
            dispatch(addPokemonDetailsData(result.date))

            return () => cancel()
        }
        fetchData()
    }, [url])

=======
        setLoading(true)
        axios.get(url)
            .then(response => {
                setLoading(false)
                setCurrentUrl(url)
                setPockemonimgdata(response.data.sprites.front_default)
                setPockemonditailsdata(response.data.base_experience)
                setPockemonheight(response.data.height)
                setPockemondata(response.data)
                
                
            })}, [url])
        
            
>>>>>>> 14088ed80932d4e2a4f4fb339196eaee496cae33:src/Components/Pockemonitem/Pockemonitem.js
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
                <Pokemonimg src={pokemonimgdata} alt='pokemon'/>
                <h2 ref={_subtitle => (subtitle = _subtitle)}>{`${index}. ${name}`}</h2>
                <h5>{`Base-experience - ${pokemondetailsdata}`}</h5>
                <h5>{`Height - ${pokemonheight}`}</h5>
                <form></form>
            </Modal>
            <StyledP>
                {`${index}. ${name}`}
            </StyledP>
            <img src={pokemonimgdata} alt='pokemon'/>
            <StyledButton onClick={openModal}>Details</StyledButton>
        </StyledDiv>

    );
}

const mapStateToProps = (state) => ({types: state});

const mapDispatchToProps = {
    addPokemonDetailsData
};

<<<<<<< HEAD:src/Components/Pokemonitem/Pokemonitem.js
<<<<<<< HEAD:src/Components/Pokemonitem/Pokemonitem.js
export default connect(mapStateToProps, mapDispatchToProps)(Pokemonitem)
=======
export default connect(mapStateToProps, mapDispatchToProps)(Pockemonitem)
>>>>>>> 14088ed80932d4e2a4f4fb339196eaee496cae33:src/Components/Pockemonitem/Pockemonitem.js
=======
export default connect(mapStateToProps, mapDispatchToProps)(Pockemonitem)
>>>>>>> 14088ed80932d4e2a4f4fb339196eaee496cae33:src/Components/Pockemonitem/Pockemonitem.js
