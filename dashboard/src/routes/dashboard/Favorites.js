import { useState, useEffect } from 'react';
import React from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';

const Favorites = () => {
    const [movies, setMovies] = useState([]);

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
                    setMovies(favoriteResponse.data);
                }

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <h1>Movies you like</h1>;
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </>
    );
}
 
export default Favorites;