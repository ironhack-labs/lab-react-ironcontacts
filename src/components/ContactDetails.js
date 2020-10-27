/*
 * CONTACT DETAILS
 */

import React from 'react';

// Bootstrap components.
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ContactDetails = (props) => {
  const { name, popularity, pictureUrl, id } = props.details;
  const flooredPop = Math.round(100 * popularity) / 100;

  return (
    <React.Fragment>
      <Card bg="info" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Text>
            <p>
              <b>Name: </b>
              {name}
              <br></br>
              <b>Popularity: </b>
              {flooredPop}
            </p>
          </Card.Text>

          {/* Remove button. */}
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => {
              props.removeHandler(id);
            }}
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default ContactDetails;
