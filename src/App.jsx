import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";



const App = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card
        style={{
          width: "300px",
          textAlign: "center",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

   
    </Container>
  );
};

export default App;
