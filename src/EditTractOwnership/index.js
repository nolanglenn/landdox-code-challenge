import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Form,
  FormControl,
  Col,
  Row,
  InputGroup,
  Button,
} from 'react-bootstrap';

import MineralInterest from '../MineralInterest';

const tractOwnerships = [
  {
    id: uuidv4(),
    owner: 'Luke Skywalker',
    interest: 0.5,
    lease: 'Tatooine Lease',
    npris: [
      {
        id: uuidv4(),
        owner: 'Leia Organa',
        interest: 0.45,
      },
      {
        id: uuidv4(),
        owner: 'Han Solo',
        interest: 0.15,
      },
    ],
  },
  {
    id: uuidv4(),
    owner: 'Leia Organa',
    interest: '5',
    lease: 'Alderaan Lease',
    npris: [],
  },
];

function EditTractOwnership({ addMineralInterest }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addMineralInterest(value);
    tractOwnerships.push(value);
    console.log(tractOwnerships);
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
              <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col></Col>
        <Col>
          <Form.Control placeholder="Lease" />
        </Col>
      </Row>
      <Button type="submit">Add Mineral Interest</Button>
    </Form>
  );
}
// const EditTractOwnership = ({ value = [], onChange = () => {} }) => {

// };

export default EditTractOwnership;
