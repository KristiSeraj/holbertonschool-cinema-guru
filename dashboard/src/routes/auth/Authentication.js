import React, { useState} from 'react';
import './auth.css';
import Button from '../../components/general/Button';
import Login from './Login'
import Register from './Register';
import axios from 'axios';


const Authentication = ({ setIsLoggedIn, setUserUsername}) => {
    const [_switch, setSwitch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        setSwitch(true);
    }

    const handleSignUp = () => {
        setSwitch(false);
    }

    const handleSubmit = (onSubmit) => {
        onSubmit.preventDefault();
        const data = {
            username: username,
            password: password
        }

        const url = _switch ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';

        axios.post(url, data)
        .then(response => {
            const accessToken = response.data.accessToken;
            localStorage.setItem('accessToken', accessToken);
            setUserUsername(username);
            setIsLoggedIn(true);
        })
        .catch(error => {
            console.log(`Error: ${error}`);
        });
    }

    return (
        <div className='authContainer'>
            <div className='formAuth'>
                <Button text='Sign In' onClick={handleSignIn} className={ _switch ? 'btn active' : 'btn nonActive' } />
                <Button text='Sign Up' onClick={handleSignUp} className={ _switch ? 'btn nonActive' : 'btn active' } />
                <form onSubmit={handleSubmit}>
                    {_switch ? <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} /> : <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />}
                </form>
            </div>
        </div>
    )
};

export default Authentication;