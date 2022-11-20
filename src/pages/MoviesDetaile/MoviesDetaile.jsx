import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Box } from "../../components/Box";
import { getMovieDetailsById } from "../../fetchAPI";

const MoviesDetaile = () =>{
const param = useParams();
const [movie, setMovie] = useState([])


useEffect(()=>{
    getMovieDetailsById(param.moviesId).then(setMovie).catch(err => console.log(err))
}, [param])

const { poster_path, original_title, overview, genres, vote_average } = movie;
const genresStr =  genres && genres.map(({name}) => name).join(', ');

    return (
        <Box as="main">       
        <>
        <Box display="flex">
            <Box>
                <img width="200" src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'no_img' } alt="foto" />
            </Box>
            <Box>
                <h1>{original_title}</h1>
                <p>User score: {Number(vote_average)*10}%</p>
                <p>Overview </p><span>{overview}</span>

                <p>Genres </p><span>{genresStr}</span>
            </Box>
                
                
        </Box>
            <Box display="flex" flexDirection="column">
                <NavLink  to="cast"> Cast</NavLink>
                <NavLink to="reviews"> Reviews</NavLink>
            </Box>
            <Outlet/>
            </>           
           
        </Box>
        
            

    )
}

export default MoviesDetaile;