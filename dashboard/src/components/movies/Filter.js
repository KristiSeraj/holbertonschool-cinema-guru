import React from 'react';
import './movies.css';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
    const arrayOfGenres = ['Action', 'Drama', 'Comedy', 'Biography',
                            'Romance', 'Thriller', 'War', 'History',
                            'Sport', 'Sci-Fi', 'Documentary', 'Crime', 'Fantasy'];
    return (
        <div className='filter'>
            <SearchBar title={title} setTitle={setTitle}/>
            <Input label={'Min Date:'} type={'number'} value={minYear} setValue={setMinYear} />
            <Input label={'Max Date:'} type={'number'} value={maxYear} setValue={setMaxYear} />
            <SelectInput label={'Sort:'} value={sort} setValue={setSort} Multiple={false} options={['Latest', 'Oldest', 'Highest rated', 'Lowest rated']} />
            <div className='tagList'>{arrayOfGenres.map((tag) => <Tag genre={tag} setGenres={setGenres} filter={genres} /> )}</div>
        </div>
    );
}
 
export default Filter;