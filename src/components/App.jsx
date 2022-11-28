import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import NotFound from 'pages/Error/Error';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyled';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetaile = lazy(() =>
  import('../pages/MoviesDetaile/MoviesDetaile')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MoviesDetaile />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
    </>
  );
};
