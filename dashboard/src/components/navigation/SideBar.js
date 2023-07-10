import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';
import axios from 'axios';
import Activity from '../Activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faStar, faClock } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    const [selected, setSelected] = useState("Home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);

    const expandSidebar = () => {
        setSmall(false);
    };

    const collapseSidebar = () => {
        setSmall(true);
    }

    const homeIcon = <FontAwesomeIcon icon={faFolder} style={{ marginRight: '10px' }} />
    const favIcon = <FontAwesomeIcon icon={faStar} style={{ marginRight: '10px' }} />
    const watchIcon = <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} />

    const navigate = useNavigate();

    const setPage = (pageName) => {
        setSelected(pageName);

        if (pageName === "Home") navigate('/home');
        if (pageName === "Favorites") navigate('/favorites');
        if (pageName === "Watch Later") navigate('/watchlater');
    };

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            axios.get('http://localhost:8000/api/activity', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(response => {
                setActivities(response.data);
            })
            .catch(error => {
                console.log(`Error ${error}`);
            });
        }
    }, []);

    const dashSmall = {
        display: small ? 'block' : 'none',
        height: small ? '100vh': '',
    }

    const styleSelected = (location) => {
        return selected === location ? '#E31C25' : ''
    }

    return (
        <nav className={`dashboardMenu ${small ? 'small' : ''}`} onMouseOver={expandSidebar} onMouseOut={collapseSidebar}>
                <div style={dashSmall}>
                    <ul className='dashboardList dashboardListIcons'>
                        <li className='active'>{homeIcon}</li>
                        <li>{favIcon}</li>
                        <li>{watchIcon}</li>
                    </ul>
                </div>
                {!small && (
                    <div>
                        <ul className='dashboardList'>
                            <li onClick={() => setPage("Home")} style={{ backgroundColor: styleSelected("Home") }}>
                                {homeIcon} Home
                            </li>
                            <li onClick={() => setPage("Favorites")} style={{ backgroundColor: styleSelected("Favorites") }}>
                                {favIcon} Favorites
                            </li>
                            <li onClick={() => setPage("Watch Later")} style={{ backgroundColor: styleSelected("Watch Later") }}>
                                {watchIcon} Watch Later
                            </li>
                        </ul>
                        <Activity />
                    </div>
                )}
        </nav>
    )
};

export default SideBar;