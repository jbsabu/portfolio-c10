import { Container, Row } from "react-bootstrap";
import GalleryCard from "./GalleryCard";
import data from "../../data/data.json";

export default function List() {
  return (
    <Container>
      <Row>
        {data.map((obj) => {
          return obj ? <GalleryCard  data = {obj}/> : <p>Loading</p>;
        })}

      </Row>
    </Container>
  );
}
