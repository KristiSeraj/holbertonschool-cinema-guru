import React from 'react';
import './general.css';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ title, setTitle }) => {
    const searchIcon = <FontAwesomeIcon icon={faSearch} />
    const handleInput = (event) => {
        setTitle(event.target.value)
    }
    return (
        <div className='searchBar'>
            <Input type={'search'} value={title} onChange={handleInput} icon={searchIcon} setValue={setTitle} inputAttributes={{'placeholder': 'Search Movies'}}/>
        </div>
    )

}

export default SearchBar;