import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import  NotFound  from "pages/NotFound";
import { Layout } from './Layout/Layout';
import  Home  from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MoviesDetaile from "../pages/MoviesDetaile/MoviesDetaile";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies/>} />
          <Route path='movies/:moviesId' element={<MoviesDetaile/>}>
            <Route path='cast' element={<div>cast</div>} />
            <Route path='reviews' element={<div>reviews</div>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};