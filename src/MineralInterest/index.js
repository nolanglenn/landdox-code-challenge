import React, { useState } from 'react';
import {
  Form,
  FormControl,
  Col,
  Row,
  InputGroup,
  Button,
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function MineralInterest({ mineralInterest, index }) {
  return (
    <Form>
      <Row>
        <Col>
          {mineralInterest.owner}
          <Button>+ Add NPRI</Button>
        </Col>
        <Col>{mineralInterest.interest}</Col>
        <Col></Col>
        <Col>{mineralInterest.lease}</Col>
      </Row>
    </Form>
  );
}
// const MineralInterest = ({ value = [], onChange = () => {} }) => {
//   return (

//   );
// };

export default MineralInterest;
