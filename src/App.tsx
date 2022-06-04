import { Col, Container, Row } from "react-bootstrap";
import PostScreen from "./components/post-screen";
import UserScreen from "./components/user-screen";

function App() {
  return (
    <Container className="my-4">
      <Row>
        <Col xl={6}>
          <PostScreen />
        </Col>
        <Col xl={6}>
          <UserScreen />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
