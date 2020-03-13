import React from 'react';
import RandomButton from './RandomButton';
import SortNameButton from './SortNameButton';
import SortPopButton from './SortPopButton';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Buttons = () => {
  return(
    <Row className="justify-content-md-center">
      <Col xs lg="3">
        <RandomButton/>
      </Col>
      <Col xs lg="3">
        <SortNameButton/>
      </Col>
      <Col xs lg="3">
        <SortPopButton/>
      </Col>
    </Row>
  );
}

export default Buttons;