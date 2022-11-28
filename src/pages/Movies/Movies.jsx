import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchFilms } from '../../fetchAPI';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { NavLinks } from '../../pages/Home/Home.styled';
import { FcSearch } from 'react-icons/fc';
import { Box } from 'components/Box';
import { Input, ButtonSearch } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [queryParam, setQueryParam] = useSearchParams();
  const queryFilm = queryParam.get('query');

  useEffect(() => {
    if (!queryFilm) {
      setMovies([]);
      return;
    }
    getSearchFilms(queryFilm)
      .then(res => {
        if (res.length === 0) {
          setMovies([]);
          toast.error(`Not found film ${queryFilm}`);
          return;
        }

        setMovies([...res]);
      })
      .catch(err => console.error(err));
  }, [queryFilm]);

  const onQuery = e => {
    e.preventDefault();
    const query = e.currentTarget.query.value.trim();
    if (query === '') {
      toast.error('Please enter film name');
      return;
    }
    setQueryParam(query !== '' ? { query } : {});
  };

  return (
    <Box m="15px">
      <form onSubmit={onQuery}>
        <Input type="text" name="query" />
        <ButtonSearch type="submit">
          <FcSearch />
          Search
        </ButtonSearch>
      </form>
      {movies.length > 0 &&
        movies.map(({ id, title }) => (
          <li key={id}>
            <NavLinks to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLinks>
          </li>
        ))}
    </Box>
  );
};

export default Movies;
