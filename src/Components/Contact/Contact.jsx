
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Contact(props) {
    const { name, pictureUrl, popularity, wonOscar,wonEmmy, id, onDelete } = props
    return (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="contact">
                    <Stack direction="row" spacing={2}>
                        <Avatar
                            src={pictureUrl} alt="Arnold Schwarzenegger"
                            sx={{ width: 56, height: 56 }}
                        />
                    </Stack>
                </TableCell>
                <TableCell className='cell' align="right">{name}</TableCell>
                <TableCell className='cell' align="right">{popularity.toFixed(2)}</TableCell>
                <TableCell className='cell' align="right">{wonOscar ? "🏆": "➖"}</TableCell>
                <TableCell className='cell' align="right">{wonEmmy ? "🌟": "➖"}</TableCell>
                <TableCell className='cell' align="right">
                    <Button variant="outlined" color="error" onClick={() => {
    onDelete(id)}}>
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
    )
}

export default Contact

