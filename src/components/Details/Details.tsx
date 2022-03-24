import React, { useContext } from "react";
import { MediaInterface } from "../../interfaces/interfaces";
import './Details.css'
import DetailsContext from "../../context/details/DetailsContext";

//todo 
/*
    provider in app and return null if show false
*/
function Details() {

    const { showDetails } = useContext(DetailsContext)



    return (
        <>
            {
                showDetails && (
                    <div className="details">
                        <div className="container">
                            <h1>details is SHOWEN</h1>
                        </div>

                    </div>
                )
            }
        </>

    )
}
export default Details