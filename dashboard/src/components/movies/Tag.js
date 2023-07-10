import React, { useState } from 'react';
import './movies.css';

const Tag = ({ genre, filter, genres, setGenres }) => {
    const [selected, setSelected] = useState(false);

    const handleTag = () => {
        if (selected === true) {
            setGenres(genres[genre]);
            setSelected(false);
        } else {
            setGenres(genres[genre]);
            setSelected(true);
        }
    }
    return (
        <li onClick={handleTag} className='tagListElement'>{genre}</li>
    )
};

export default Tag;