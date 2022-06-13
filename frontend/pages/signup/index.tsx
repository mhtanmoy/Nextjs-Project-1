import { Col, Container, Row } from "react-bootstrap";
import FormSignup from "../../components/signup/FormSignup";


export default function Home() {
  return (
    <div>
      <Container >
        <br/>
        <br/>
        <Row>
          <Col md={3}>
          </Col>
          <Col md={6}>
          <FormSignup/>
          </Col>
          <Col md={3}>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
