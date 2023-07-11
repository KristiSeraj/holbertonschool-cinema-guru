import React, { useState, useEffect } from 'react';
import './movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import cinemaImg from '../../assets/cinemaimg.png';

const MovieCard = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);
    const [imageError, setImageError] = useState(false);

    const favIcon = <FontAwesomeIcon icon={faStar} />
    const watchIcon = <FontAwesomeIcon icon={faClock} />

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (accessToken) {
                    const favoriteResponse = await axios.get('http://localhost:8000/api/titles/favorite/', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                    const watchLaterResponse = await axios.get('http://localhost:8000/api/titles/watchlater/', {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });

                    const favoriteMovies = favoriteResponse.data;
                    const watchLaterMovies = watchLaterResponse.data;
                    
                    setIsFavorite(favoriteMovies.some((favMovie) => favMovie.imbdId === movie.imbdId));
                    setIsWatchLater(watchLaterMovies.some((wlMovie) => wlMovie.imbdId === movie.imbdId));
                }

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, [movie]);

    const handleClick = async (type) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            if (type === 'favorite') {
                if (isFavorite) {
                    await axios.delete(`http://localhost:8000/api/titles/favorite/${movie.imdbId}`, {imdbId: movie.imdbId}, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                    setIsFavorite(false);
                } else {
                    await axios.post(`http://localhost:8000/api/titles/favorite/${movie.imdbId}`, {imdbId: movie.imdbId}, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                    setIsFavorite(true);
                }
            }
            if (type === 'watchlater') {
                if (isWatchLater) {
                    await axios.delete(`http://localhost:8000/api/titles/watchlater/${movie.imdbId}`, {imdbId: movie.imdbId}, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                    setIsWatchLater(false);
                } else {
                    await axios.post(`http://localhost:8000/api/titles/watchlater/${movie.imdbId}`, {imdbId: movie.imdbId}, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    });
                    setIsWatchLater(true);
                }
            }
        }
    }

    const handleImageError = () => {
        setImageError(true);
    }
    
    return (
        <div className='movieCard'>
            <ul className='movieCardList'>
                <div>
                    <li onClick={() => handleClick("favorite")} className='movieCardIcons'>
                        {favIcon}
                    </li>
                    <li onClick={() => handleClick("watchlater")} className='movieCardIcons2'>
                        {watchIcon}
                    </li>
                    <li>
                        {imageError ? (
                            <img src={cinemaImg} alt='cinemaImg' />
                        ) : (
                            <img src={movie.imageurls[0]} alt='Movie cover' onError={handleImageError}/>
                        )}
                    </li>
                    <li className='movieTitle'>
                        {movie.title}
                    </li>
                </div>
                <li className='movieSynopsis'>
                    {movie.synopsis}
                </li>
                <ul className='genresContainer'>
                    {movie.genres.map(genre => <li className='movieGenre'>{genre}</li>)}
                </ul>
            </ul>
        </div>
    );
}
 
export default MovieCard;