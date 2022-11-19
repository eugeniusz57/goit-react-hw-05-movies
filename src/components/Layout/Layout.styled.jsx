import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
display: inline-flex;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  min-width: 100px;
  margin: 10px;
  text-align: center;
  justify-content: center;

  &.active {
    color: white;
    background-color: orangered;
  }
`;