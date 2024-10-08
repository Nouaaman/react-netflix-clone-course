import React, { useContext, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './NavBar.css'
import UserContext from "../../../context/user/UserContext";
import Search from "../../Search/Search";




function NavBar() {
    const { isConnected, setIsConnected } = React.useContext(UserContext)
    const [isShown, setShown] = useState(false)
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const { pathname } = useLocation();



    return (
        <header className={isConnected ? 'sticky' : 'spaced'}>
            {isConnected && //show menu toggle if connected
                <div className='menu-toggle' onClick={() => setShown(!isShown)}>
                    {!isShown && (<i className="fa-solid fa-bars icon"></i>)}
                    {isShown && (<i className="fa-solid fa-xmark icon"></i>)}
                </div>
            }
            <div className='nav-wrapper'>
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
                        </ul>
                    </nav>
                }
            </div>
            {!isConnected &&
                <div className="sign-in">
                    <NavLink to='login'><button className='sign-in-btn'>Sign In</button></NavLink>
                </div>}

            {isConnected &&
                <div className='profile-notifications'>
                    <Search />
                    <div className="profile">
                        <div className='notification'>
                            <img src="assets/icons-notification.png" alt="" />
                        </div>
                        <div className='profile-container'>

                            <button className='btn-profile' onClick={() => setShowProfileMenu(!showProfileMenu)} >
                                <img src="assets/icons-user.png" alt="" />
                            </button>
                            <div className={showProfileMenu ? 'menu' : 'menu hidden'}>
                                <ul>
                                    <NavLink to='Profiles'><li>Profiles</li></NavLink>
                                    <NavLink onClick={()=>setIsConnected(false)} to='/'><li>LogOut</li></NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }



        </header>
    )
}
export default NavBar
