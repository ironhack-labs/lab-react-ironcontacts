import React from 'react';
import Button from '../components/Button';

function Contact(props) {
    const { name, pictureUrl, popularity, id, deleteContact } = props;
    return (
      <tr>
        <td>
          <img src={pictureUrl} width="100px" />
        </td>
        <td>{name}</td>
        <td>{popularity.toFixed(2)}</td>
        <td>
          <Button onClick={() => deleteContact(id)}>Delete</Button>
          {/*           
          // Understanding the notation in contact component
          const log = console.log;
          // here we are pointing the definition .
          const hello = () => console.log("hello");
          // we are assigning a function definition to a function. Actually we do not call the function when we do this.
          const jello = console.log("Hello jello");
          // But the above DOES call it.
          hello(); */}
        </td>
      </tr>
    );
  }
  

export default Contact
