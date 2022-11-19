import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchFilms } from "../../fetchAPI";
import { NavLink, useLocation } from 'react-router-dom';

const Movies = () =>{
    const location = useLocation();
const [movies, setMovies] =  useState();
const [queryParam, setQueryParam ] = useSearchParams();
const queryFilm = queryParam.get('query')

useEffect(()=>{
    if(!queryFilm){
return;
    }
    getSearchFilms(queryFilm).then(setMovies)
}, [queryFilm])

const onQuery = (e) =>{
    e.preventDefault();
   const query = e.currentTarget.query.value;
    setQueryParam(query !== '' ? {query} : {})

}

    return (
        <>
            <form onSubmit={onQuery}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
    </form>
   {movies &&  movies.map(({ id, title }) => (<li key={id}> <NavLink to={`/movies/${id}`} state={{ from: location }}>
   {title}
   </NavLink></li>))}
   </>


    )
    
}

export default Movies;