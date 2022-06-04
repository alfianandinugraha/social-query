import { Col, Container, Row } from "react-bootstrap";
import PostScreen from "./components/post-screen";
import { useGetAllPostQuery } from "./store/api/postApi";

function App() {
  return (
    <Container className="my-4">
      <Row>
        <Col xl={6}>
          <PostScreen />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
