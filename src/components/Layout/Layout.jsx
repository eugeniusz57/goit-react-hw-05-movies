import { Outlet } from "react-router-dom";
import { Box } from '../Box';
import { Link } from "./Layout.styled";

export const Layout = () => {
  return (
<Box >
  <Box display="flex" as='header'>
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>  
  </Box>
  <Outlet />
</Box>
   
  );
};