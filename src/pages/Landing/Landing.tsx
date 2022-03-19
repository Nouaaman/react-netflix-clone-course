import React, {  MouseEvent } from 'react'
import './Landing.css'

function Landing() {


    const handleToggle = (e: MouseEvent): void => {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        const faqAnswer = target.nextElementSibling;
        faqAnswer?.classList.toggle('opened')

    };
    return (
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
                                <video src="assets/video-tv.m4v" autoPlay loop muted ></video>
                                <img src="assets/tv.png" alt="tv" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='story-card'>
                    <div className="story-card-container">
                        <div className='story-card-image'>
                            <div className="story-card-image-container">
                                <video src="assets/video-tv.m4v" autoPlay loop muted ></video>
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
                                <video src="assets/video-devices.m4v" autoPlay loop muted></video>
                                <img src="assets/img-devices.png" alt="tv" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='story-card'>
                    <div className="story-card-container">
                        <div className='story-card-image'>
                            <div className="story-card-image-container">
                                <img src="assets/kids.png" alt="tv" />
                            </div>
                        </div>
                        <div className='story-card-text'>
                            <h1>Create profiles for kids.</h1>
                            <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                        </div>

                    </div>
                </div>

                <div className='story-card faq-card'>
                    <div className="story-card-container">
                        <div className='story-card-text'>
                            <h1>Frequently Asked Questions</h1>
                            <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                        </div>
                        <ul className="faq-list">

                            <li>
                                <button className='faq-question' onClick={handleToggle}>
                                    What is Netflix?
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <div className='faq-answer closed'>
                                    <span>
                                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br /><br />
                                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                                    </span>
                                </div>
                            </li>
                            <li>
                                <button className='faq-question' onClick={handleToggle}>
                                    How much does Netflix cost?
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <div className='faq-answer closed'>
                                    <span>
                                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR8.99 to EUR17.99 a month. No extra costs, no contracts.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <button className='faq-question' onClick={handleToggle}>
                                    Where can i watch?
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <div className='faq-answer closed'>
                                    <span>
                                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br />
                                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <button className='faq-question' onClick={handleToggle}>
                                    How can i cancel?
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <div className='faq-answer closed'>
                                    <span>
                                        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <button className='faq-question' onClick={handleToggle}>
                                    Waht can i watch on Netflix?
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <div className='faq-answer closed'>
                                    <span>
                                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                    </span>
                                </div>
                            </li>
                            <li>
                                <button className='faq-question' onClick={handleToggle}>
                                    Is Netflix good for kids?
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <div className='faq-answer closed'>
                                    <span>
                                        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                                        <br />
                                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                    </span>
                                </div>
                            </li>

                        </ul>

                        <div className='email-form'>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
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
            </main>
    )


}

export default Landing