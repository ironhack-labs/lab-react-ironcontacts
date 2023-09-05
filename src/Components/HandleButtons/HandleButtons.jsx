
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function HandleButtons(props) {
  const {addRandomContact, sortByName, sortByPopularity} = props
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={addRandomContact}>Add random contacts</Button>
      <Button onClick={sortByPopularity}>Sort by popularity</Button>
      <Button onClick={sortByName}>Sort by name</Button>
    </ButtonGroup>
  );
}
