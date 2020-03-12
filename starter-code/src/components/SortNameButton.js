import React, {useContext} from 'react';
import { ContactContext } from '../contexts/ContactContext';
import Button from 'react-bootstrap/Button';

const SortNameButton = () => {
  const {sortByName} = useContext(ContactContext);
  return(
   <Button onClick={() => sortByName()} variant="primary">Sort By Name</Button>
  );
}

export default SortNameButton;