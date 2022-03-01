import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './NavBar.css'



function NavBar() {
    const [isShown, setShown] = useState(false)
    const { pathname } = useLocation();
    return (
        <header>
            <div className='menu-toggle' onClick={() => setShown(!isShown)}>
                {!isShown && (<i className="fa-solid fa-bars fa-2xl"></i>)}
                {isShown && (<i className="fa-solid fa-xmark fa-2xl"></i>)}

            </div>
            <div className='logo'>
                <Link to='/'>  <img src='assets/netflix-logo.svg' alt='logo' /></Link>
            </div>
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
        </header>
    )
}

export default NavBar
