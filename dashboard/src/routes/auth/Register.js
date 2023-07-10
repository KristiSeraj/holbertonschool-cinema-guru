import React from 'react';
import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faPlus } from '@fortawesome/free-solid-svg-icons';

const Register = ({ username, password, setUsername, setPassword }) => {
    const usrIcon = <FontAwesomeIcon icon={faUser} style={{ color: 'grey', marginRight: '10px' }} />
    const passIcon = <FontAwesomeIcon icon={faKey} style={{ color: 'grey', marginRight: '10px' }} />
    const btnIcon = <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px'}} />
    return (
        <>
            <div className='registerContainer'>
                <h2>Create a new account</h2>
                <Input label={'Username:'} type={'text'} value={username} icon={usrIcon} setValue={setUsername}/>
                <Input label={'Password:'} type={'password'} value={password} icon={passIcon} setValue={setPassword}/>
                <Button text={'Sign Up'} icon={btnIcon} className={'btn nonActive btnAuth'} />
            </div>
        </>
    )
};

export default Register;