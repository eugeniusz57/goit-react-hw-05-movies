import { useEffect, useState } from 'react';
import { getTrendingFilms } from '../../fetchAPI';
import { useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import { Title, NavLinks } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    getTrendingFilms()
      .then(setPopularFilms)
      .catch(error => console.error(error));
  }, []);

  return (
    <Box as="main" px="15px">
      <Title>Popular films</Title>
      <ul>
        {popularFilms &&
          popularFilms.map(({ id, title }) => (
            <li key={id}>
              <NavLinks to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavLinks>
            </li>
          ))}
      </ul>
    </Box>
  );
};
export default Home;
