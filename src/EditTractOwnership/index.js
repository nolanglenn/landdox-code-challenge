import React, { useState } from 'react';

import {
  Form,
  FormControl,
  Col,
  Row,
  InputGroup,
  Button,
} from 'react-bootstrap';

function EditTractOwnership({ addMineralInterest }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addMineralInterest(value);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Control
            placeholder="Name"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Mineral Interest"
              aria-label="Mineral Interest"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text
                id="basic-addon2"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              >
                %
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col></Col>
        <Col>
          <Form.Control
            placeholder="Lease"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Col>
      </Row>
      <Button type="submit">Add Mineral Interest</Button>
    </Form>
  );
}

export default EditTractOwnership;
