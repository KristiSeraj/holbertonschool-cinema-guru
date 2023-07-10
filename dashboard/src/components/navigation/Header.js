import React from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

const Header = ({ userUsername, setIsLoggedIn }) => {
    const logoutIcon = <FontAwesomeIcon icon={faSignOut} styles={{ color: '#BB000E' }}/>
    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    }
    return (
        <nav className='navMenu'>
            <h2 className='navLogo'>Cinema Guru</h2>
            <img src='https://picsum.photos/100/100' alt='avatar' className='avatar'/>
            <p className='welcomeMsg'>Welcome, {userUsername}!</p>
            <span onClick={logout} className='logoutMsg'>{logoutIcon} Logout</span>
        </nav>
    )
};

export default Header;