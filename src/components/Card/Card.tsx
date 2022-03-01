import React from "react";
import { MediaInterface } from "../../interfaces/interfaces";
import './Card.css'

function Card(props: { item: MediaInterface }) {
    const { name,poster_path } = props.item
    return (
        <div className="card">
            <img src={poster_path} alt={name} />
        </div>
    );
}

export default Card;