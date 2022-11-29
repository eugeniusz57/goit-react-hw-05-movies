import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 8px;
  margin-bottom: 12px;
`;

export const NavLinks = styled(Link)`
  color: #020f3e;
  letter-spacing: 1px;
  line-height: 1.4;
  text-decoration: none;
  padding: 4px;
  :focus,
  :hover {
    color: #ad0b91;
    background-color: #d3cbcb;
    border-radius: 4px;
  }
`;
