import React from 'react';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = ({ username, password, setUsername, setPassword }) => {
    const usrIcon = <FontAwesomeIcon icon={faUser} style={{ color: 'grey', marginRight: '10px' }} />
    const passIcon = <FontAwesomeIcon icon={faKey} style={{ color: 'grey', marginRight: '10px' }} />
    const btnIcon = <FontAwesomeIcon icon={faKey} style={{ marginRight: '10px' }} />
    return (
        <div className='loginContainer'>
            <h2>Sign in with your account</h2>
            <Input label={'Username:'} type={'text'} value={username} icon={usrIcon} setValue={setUsername}/>
            <Input label={'Password:'} type={'password'} value={password} icon={passIcon} setValue={setPassword}/>
            <Button text={'Sign In'} icon={btnIcon} className={'btn nonActive btnAuth'}/>
        </div>
    )
};

export default Login;