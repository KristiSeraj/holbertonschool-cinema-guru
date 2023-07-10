import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <BrowserRouter>
            <div>
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                <SideBar />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/watchlater' element={<WatchLater />} />
                <Route path='*' element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Dashboard;