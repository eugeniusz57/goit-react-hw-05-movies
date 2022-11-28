import styled from 'styled-components';

export const Input = styled.input`
  padding: 6px;
  color: black;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 4px;
  outline: none;
  border: 1px solid black;
  :focus {
    box-shadow: 1px 1px 24px 0px rgba(113, 160, 160, 1);
  }
`;

export const ButtonSearch = styled.button`
  display: inline-flex;
  align-item: center;
  justify-content: center;
  min-width: 80px;
  padding: 5px;
  background-color: #f3e6e6;
  border-radius: 4px;
  border: 1px solid black;
  cursor: pointer;
  :focus,
  :hover {
    background-color: gray;
  }
`;
