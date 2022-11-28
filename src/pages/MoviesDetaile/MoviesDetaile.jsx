import { useState } from 'react';
import { useEffect } from 'react';
import { Suspense } from 'react';
import { NavLinkMoviesDetail, TextMoviesDitail } from './MoviesDetaile.styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Box } from '../../components/Box';
import { getMovieDetailsById } from '../../fetchAPI';
import noPoster from '../../image/csaff-no-poster.9916655f.jpg';
import { BsArrowLeft } from 'react-icons/bs';

const MoviesDetaile = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const { poster_path, original_title, overview, genres, vote_average } = movie;
  const genresStr = genres && genres.map(({ name }) => name).join(', ');

  useEffect(() => {
    getMovieDetailsById(param.moviesId)
      .then(setMovie)
      .catch(err => console.log(err));
  }, [param]);

  const backLinkHref = location.state?.from ?? '/';
  return (
    <Box as="main">
      <NavLinkMoviesDetail to={backLinkHref}>
        <BsArrowLeft size={26} />
        Go to back
      </NavLinkMoviesDetail>
      <Box display="flex">
        <Box>
          <img
            width="200"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : noPoster
            }
            alt="foto"
          />
        </Box>
        <Box px={15}>
          <h2>{original_title}</h2>
          <TextMoviesDitail>
            <b>User score:</b> {Number(vote_average) * 10}%
          </TextMoviesDitail>
          <TextMoviesDitail>Overview </TextMoviesDitail>
          <span>{overview}</span>

          <TextMoviesDitail>Genres </TextMoviesDitail>
          <span>{genresStr}</span>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <NavLinkMoviesDetail to="cast"> Cast</NavLinkMoviesDetail>
        <NavLinkMoviesDetail to="reviews"> Reviews</NavLinkMoviesDetail>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MoviesDetaile;
