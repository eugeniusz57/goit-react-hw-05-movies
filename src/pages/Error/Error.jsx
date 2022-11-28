import { Box } from 'components/Box';
import { NavLinkMoviesDetail } from 'pages/MoviesDetaile/MoviesDetaile.styled';
import { BsArrowLeft } from 'react-icons/bs';
import notPage from '../../image/blad-404.jpg';

const NotFound = () => {
  return (
    <Box>
      <NavLinkMoviesDetail to={'/'}>
        <BsArrowLeft size={26} />
        Home page
      </NavLinkMoviesDetail>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={notPage} alt="page not found" />
      </Box>
    </Box>
  );
};
export default NotFound;
