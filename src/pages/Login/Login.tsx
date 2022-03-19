import React, { useEffect } from 'react'
import UserContext from '../../context/user/UserContext'
import { useNavigate } from 'react-router';
import './Login.css'

function Home() {
    const navigate = useNavigate()
    const {
        isConnected,
        setIsConnected
    } = React.useContext(UserContext)

    useEffect(() => {
        if (isConnected) {
            navigate('/home')
        }
    }, []
    )
    const handleLogin = () => {
        setIsConnected(true);
        navigate('/home')
    }

    return (
        <main className='login'>
            <div className='form-container'>
                <div className="container">
                    <h1>Sign In</h1>
                    <div className="form-element">
                        <input type="text" name="username" id="username" />
                        <label className="floating-label" htmlFor="username">Email or Phone Number</label>
                    </div>
                    <div className="form-element">
                        <input type="password" name="password" id="password" />
                        <label className="floating-label" htmlFor="password">Password</label>
                    </div>
                    <button className="btn" onClick={handleLogin}>Sign In</button>
                </div>
            </div>
        </main>

    )


}

export default Home