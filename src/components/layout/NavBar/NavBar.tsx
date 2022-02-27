import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './NavBar.css'



function NavBar() {
    const { pathname } = useLocation();
    return (
        <header>
            <div className='logo'>
                <Link to='/'>  <img src='assets/netflix-logo.svg' alt='logo'/></Link>
            </div>
            <nav>
                <ul className='nav-links'>
                    <NavLink to='Home' className={['/', 'home'].includes(pathname) ? 'active' : ''} >
                        <ul>Home</ul>
                    </NavLink>
                    <NavLink to='TVShows'><ul>TV Shows</ul></NavLink>
                    <NavLink to='Movies'><ul>Movies</ul></NavLink>
                    <NavLink to='Latest'><ul>Latest</ul></NavLink>
                    <NavLink to='MyList'><ul>My list</ul></NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
