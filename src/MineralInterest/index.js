import React from 'react';
import { Form, FormControl, Col, Row, InputGroup } from 'react-bootstrap';

const MineralInterest = ({ value = [], onChange = () => {} }) => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Label>Owner</Form.Label>
        </Col>
        <Col>
          <Form.Label>Mineral Interest</Form.Label>
        </Col>
        <Col>
          <Form.Label>NPRI</Form.Label>
        </Col>
        <Col>
          <Form.Label>Lease</Form.Label>
        </Col>
      </Row>
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
    </Form>
  );
};

export default MineralInterest;
