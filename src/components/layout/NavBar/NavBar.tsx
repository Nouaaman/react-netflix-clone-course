import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './NavBar.css'
import TmdbContext from "../../../context/tmdb/TmdbContext";




function NavBar() {
    const { isConnected } = React.useContext(TmdbContext)
    const [isShown, setShown] = useState(false)
    const { pathname } = useLocation();
    return (
        <header className={isConnected ? 'sticky' : 'spaced'}>
            {isConnected && //show menu toggle if connected
                <div className='menu-toggle' onClick={() => setShown(!isShown)}>
                    {!isShown && (<i className="fa-solid fa-bars icon"></i>)}
                    {isShown && (<i className="fa-solid fa-xmark icon"></i>)}
                </div>
            }

            <div className='logo'>
                <Link to='/'>  <img src='assets/netflix-logo.svg' alt='logo' /></Link>
            </div>
            {isConnected && //show nav if connected
                <nav className={isShown ? 'shown' : ''}>
                    <ul className='nav-links'>
                        <NavLink to='Home' className={['/', 'home'].includes(pathname) ? 'active' : ''}  >
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='TVShows'><li>TV Shows</li></NavLink>
                        <NavLink to='Movies'><li>Movies</li></NavLink>
                        <NavLink to='Latest'><li>Latest</li></NavLink>
                        <NavLink to='MyList'><li>My list</li></NavLink>
                    </ul>
                </nav>
            }
            {!isConnected &&
                <div className="sign-in">
                    <NavLink to='login'><button className='sign-in-btn'>Sign In</button></NavLink>
                </div>
            }

        </header>
    )
}
export default NavBar
