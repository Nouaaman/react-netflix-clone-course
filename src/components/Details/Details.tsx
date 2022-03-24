import React, { useContext } from "react";
import { MediaInterface } from "../../interfaces/interfaces";
import './Details.css'
import DetailsContext from "../../context/details/DetailsContext";

//todo 
/*
    provider in app and return null if show false
*/
function Details() {

    const { showDetails, media, toggleDetails } = useContext(DetailsContext)



    return (
        <>
            {
                showDetails && (
                    <div className="details">
                        <div className="container">
                            <div className="content">
                                <div className="banner">
                                    <img src={media?.backdrop_path} />
                                    <button className="btn-close" onClick={() => toggleDetails(false, null, null)}
                                    ><i className="fa-solid fa-xmark icon"></i>
                                    </button>

                                    <h1 className="name"> {media?.name}</h1>


                                    <div className='actions'>
                                        <button className='btn-play btn'>
                                            <span>
                                                <i className="fa-solid fa-play"></i>
                                            </span>
                                            <span>Play</span>
                                        </button>

                                        <button className='btn-round btn'>
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                        <button className='btn-round btn'>
                                            <i className="fa-solid fa-thumbs-up"></i>
                                        </button>
                                        <button className='btn-round btn'>
                                            <i className="fa-solid fa-thumbs-down"></i>
                                        </button>
                                    </div>

                                </div>
                                <div className="description">
                                    <div className="overview">
                                        {media?.overview}
                                    </div>
                                    <div className="info">
                                        <ul>
                                            <li><span>Release date: </span> {media?.release_date}</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="select-container">
                                    <h3>Episodes</h3>
                                    <select name="" id="">
                                        <option value="">Season 1</option>
                                        <option value="">Season 2</option>
                                        <option value="">Season 3</option>
                                    </select>
                                </div> */}
                            </div>
                        </div>

                    </div>
                )
            }
        </>

    )
}
export default Details