import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Filter from '../../components/movies/Filter';
import MovieCard from '../../components/movies/MovieCard';
import Button from '../../components/general/Button';
import axios from 'axios';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState("");
    const [title, setTitle] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadMovies(page)
    });
    
    const loadMovies = async (page) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const response = await axios.get('http://localhost:8000/api/titles/advancedsearch', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                params: {
                    minYear: minYear,
                    maxYear: maxYear,
                    genres: genres.join(','),
                    title: title,
                    page: page,
                    sort: sort
                }
            })
            const newMovies = response.data.titles;
            setMovies(newMovies)
        }
    }


    const handleLoadMore = () => {
        const nextPage = page + 1;
        loadMovies(nextPage);
        setPage(nextPage);
    }
    
    return (
        <div className='homepage'>
            <Filter minYear={minYear} setMinYear={setMinYear}
                    maxYear={maxYear} setMaxYear={setMaxYear}
                    sort={sort} setSort={setSort}
                    genres={genres} setGenres={setGenres}
                    title={title} setTitle={setTitle}
            />
            <div className='movieContainer'>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Button text={"Load More.."} onClick={handleLoadMore} className={'loadBtn'}/>
        </div>
    );
}
 
export default HomePage;