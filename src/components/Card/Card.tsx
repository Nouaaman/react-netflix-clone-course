import React from "react";
import { MediaInterface } from "../../interfaces/interfaces";
import './Card.css'

function Card(props: { item: MediaInterface }) {
    const { name, poster_path } = props.item
    return (
        <div className="card">
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