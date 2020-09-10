import React from 'react';

import {
  Form,
  FormControl,
  Col,
  Row,
  InputGroup,
  Button,
} from 'react-bootstrap';

import MineralInterest from '../MineralInterest';

const EditTractOwnership = ({ value = [], onChange = () => {} }) => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="Name" />
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Mineral Interest"
              aria-label="Mineral Interest"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col></Col>
        <Col>
          <Form.Control placeholder="Lease" />
        </Col>
      </Row>
      <Button>Add Mineral Interest</Button>
    </Form>
  );
};

export default EditTractOwnership;
