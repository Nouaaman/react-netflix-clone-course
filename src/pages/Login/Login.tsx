import React from 'react'
import TmdbContext from '../../context/tmdb/TmdbContext'
import './Login.css'

function Home() {

    // const { } = React.useContext(TmdbContext)

    return (
        <main className='login'>
            <div className='form-container'>
                <form action="#" className="container">
                    <h1>Sign In</h1>
                    <div className="form-element">
                        <input type="text" name="username" id="username" required />
                        <label className="floating-label" htmlFor="username">Email or Phone Number</label>
                    </div>
                    <div className="form-element">
                        <input type="password" name="password" id="password" required />
                        <label className="floating-label" htmlFor="password">Password</label>
                    </div>
                    <button className="btn">Sign In</button>
                </form>
            </div>
        </main>

    )


}

export default Home