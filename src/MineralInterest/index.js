import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

function MineralInterest({ mineralInterest, index }) {
  return (
    <Form data-testid="mineral-interest">
      <Row>
        <Col>
          {mineralInterest.owner}
          {/* <Button>+ Add NPRI</Button> */}
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
