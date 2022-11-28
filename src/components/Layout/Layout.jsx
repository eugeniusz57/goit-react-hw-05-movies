import { Outlet } from 'react-router-dom';
import { Box } from '../Box';
import { Link } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box px="15px">
      <Box display="flex" as="header" borderBottom="1px solid #000">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
