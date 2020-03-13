import React, {useContext} from 'react';
import { ContactContext } from '../contexts/ContactContext';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: #5D6D7E;
  font-size: 1.2em;
  border: none;
`;

const SortPopButton = () => {
  const {sortByPopularity} = useContext(ContactContext);
  return(
   <StyledButton onClick={() => sortByPopularity()} variant="primary">Sort By Popularity</StyledButton>
  );
}

export default SortPopButton;