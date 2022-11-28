import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkMoviesDetail = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #020f3e;
  letter-spacing: 1px;
  line-height: 1.4;
  text-decoration: none;
  padding: 4px;
  width: 150px;
  :focus,
  :hover {
    color: #ad0b91;
    background-color: #d3cbcb;
    border-radius: 4px;
  }

  &:active {
    background-color: #d3cbcb;
  }
`;

export const TextMoviesDitail = styled.h3`
  text-size: 16px;
`;
