import React, { useContext } from "react";
import ModalContext from "../../context/details/DetailsContext";
import { MediaInterface } from "../../interfaces/interfaces";
import './Card.css'

function Card(props: { item: MediaInterface }) {
    const { id, name, poster_path,media_type} = props.item

    const { showDetails, toggleDetails } = useContext(ModalContext)

    const handleClick = () => {
        console.log(media_type);
        
        toggleDetails(true,id,media_type)

    }

    return (
        <div className="card" onClick={handleClick}>
            {
                poster_path != null &&
                <img src={poster_path} alt={name} />
            }
            {
                poster_path == null &&
                <img src='assets/icon-empty.png' alt='no poster' />
            }
            <div className="caption">
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default Card;