import React, {useContext} from 'react';
import { ContactContext } from '../contexts/ContactContext';
import Button from 'react-bootstrap/Button';

const SortPopButton = () => {
  const {sortByPopularity} = useContext(ContactContext);
  return(
   <Button onClick={() => sortByPopularity()} variant="primary">Sort By Popularity</Button>
  );
}

export default SortPopButton;