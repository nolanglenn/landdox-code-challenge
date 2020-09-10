import React, { useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import './App.css';

import EditTractOwnership from './EditTractOwnership';
import MineralInterest from './MineralInterest';
import Icon from './Icon';

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
    owner: 'Nolan',
    interest: 0.6,
    lease: 'Austin',
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
];

function App() {
  const [mineralInterests, setMineralInterests] = useState(tractOwnerships);

  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>
              Landdox Code Challenge <Icon icon="smile" />
            </h1>
          </Jumbotron>
        </Col>
      </Row>
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
      <hr></hr>
      <Row>
        <Col>
          {mineralInterests.map((mineralInterest, index) => (
            <MineralInterest
              key={index}
              index={index}
              mineralInterest={mineralInterest}
            />
          ))}
          <EditTractOwnership value={tractOwnerships} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
