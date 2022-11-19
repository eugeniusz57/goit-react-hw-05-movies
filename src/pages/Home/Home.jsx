import { useEffect, useState } from "react";
import  {getTrendingFilms}  from "../../fetchAPI";
import { NavLink, useLocation } from 'react-router-dom';

const Home = () =>{ 
  const location = useLocation();
const [popularFilms, setPopularFilms] = useState([]);

useEffect(()=>{
  getTrendingFilms()
  .then( results => setPopularFilms(results))
  .catch(error => console.error(error))
}, [])

return (
  popularFilms.map(({ id, title }) => (<li key={id}> <NavLink to={`/movies/${id}`} state={{ from: location }}>
  {title}
  </NavLink></li>))

)
}
export default Home;