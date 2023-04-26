import { Row, Col, Container } from "react-bootstrap";


export default function About (){

  return (
    
    <Container >
      <Row className="bg-danger">
        <Col>
        <img src="https://picsum.photos/300/300" alt="" />
        </Col>
        <Col>
        <h1>I am Jonaothaoan</h1>
        <p>I am a software engineer located in south Florida. I love JavaScript CSS and Mongolia.</p>
        <p>Contact me: email@email.com</p>
        </Col>
      </Row>
      </Container>     


  )
}