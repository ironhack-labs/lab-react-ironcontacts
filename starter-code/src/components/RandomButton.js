import React, {useContext} from 'react';
import { ContactContext } from '../contexts/ContactContext';
import Button from 'react-bootstrap/Button';

const RandomButton = () => {
  const {addRandom} = useContext(ContactContext);
  return(
   <Button onClick={() => addRandom()} variant="primary">Add Random Contact</Button>
  );
}

export default RandomButton;