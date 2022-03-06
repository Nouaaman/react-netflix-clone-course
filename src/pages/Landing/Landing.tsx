import React from 'react'
import { Link } from "react-router-dom";
import './Landing.css'

function Landing() {

    return (
        <>
            <header>
                <div className='logo'>
                    <Link to='/'>  <img src='assets/netflix-logo.svg' alt='logo' /></Link>
                </div>
            </header>
            <main className='landing'>

                <div className='story-header'>
                    <div className='content'>
                        <h1 className='subtilte'>Unlimited movies, TV shows, and more.</h1>
                        <h2 className='subtilte'>Watch anywhere. Cancel anytime.</h2>
                        <h3 className='subtilte'>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='email-form'>
                            <input type="text" placeholder='Email address' />
                            <button className='btn-getstarted'>
                                <span>Get Started</span>
                                <span>
                                    <i className="fa-solid fa-angle-right icon"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='story-card'>
                    <div className="story-card-container">
                        <div className='story-card-text'>
                            <h1>Enjoy on your TV.</h1>
                            <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                        </div>
                        <div className='story-card-image'>
                            <div className="story-card-image-container">
                                <video src="assets/video-tv.m4v" autoPlay loop ></video>
                                <img src="assets/tv.png" alt="tv" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='story-card'>
                    <div className="story-card-container">
                        <div className='story-card-image'>
                            <div className="story-card-image-container">
                                <video src="assets/video-tv.m4v" autoPlay loop ></video>
                                <img src="assets/tv.png" alt="tv" />
                            </div>
                        </div>
                        <div className='story-card-text'>
                            <h1>Download your shows to watch offline.</h1>
                            <h2>Save your favorites easily and always have something to watch.</h2>
                        </div>

                    </div>
                </div>

                <div className='story-card'>
                    <div className="story-card-container">
                        <div className='story-card-text'>
                            <h1>Watch everywhere.</h1>
                            <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                        </div>
                        <div className='story-card-image'>
                            <div className="story-card-image-container">
                                <video src="assets/video-tv.m4v" autoPlay loop ></video>
                                <img src="assets/tv.png" alt="tv" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='story-card'>
                    <div className="story-card-container">
                        <div className='story-card-image'>
                            <div className="story-card-image-container">
                                <video src="assets/video-tv.m4v" autoPlay loop ></video>
                                <img src="assets/tv.png" alt="tv" />
                            </div>
                        </div>
                        <div className='story-card-text'>
                            <h1>Create profiles for kids.</h1>
                            <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )


}

export default Landing