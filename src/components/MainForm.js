import React from "react";
import { Form, Button, Col, Jumbotron, Container, Row } from "react-bootstrap";
const MainForm = () => {
  return (
    <div>
      <Form>
        <Jumbotron fluid>
          <Container>
            <Form.Row>
              <Col>
                <Form.Control placeholder="First name" required />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" required />
              </Col>
            </Form.Row>
          </Container>
        </Jumbotron>

        <Jumbotron fluid>
          <Container>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </Col>
            </Form.Group>
          </Container>
        </Jumbotron>

        <Jumbotron fluid>
          <Container>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" required minlength='5' maxLength='16' />
              </Col>
            </Form.Group>
          </Container>
        </Jumbotron>

        <Jumbotron fluid>
          <Container>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" required />
            </Form.Group>
          </Container>
        </Jumbotron>

        <Form.Row className="stateCity">
          <Jumbotron fluid>
            <Container>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Container>
          </Jumbotron>

          <Jumbotron fluid>
            <Container>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." required>
                  <option>Choose...</option>
                  <option>Tunisia</option>
                  <option>Algeria</option>
                  <option>Morocco</option>
                  <option>Lybia</option>
                  <option>France</option>
                  <option>Germany</option>
                  <option>Canada</option>
                  <option>Spain</option>
                  <option>USA</option>
                </Form.Control>
              </Form.Group>
            </Container>
          </Jumbotron>

          <Jumbotron fluid>
            <Container>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Container>
          </Jumbotron>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="I certify the accuracy of the information above"
            feedback="You must tick before submitting."
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register now
        </Button>
      </Form>
    </div>
  );
};

export default MainForm;
