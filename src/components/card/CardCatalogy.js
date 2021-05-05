import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";

export default function CardCatalogy() {
    return (
    <Container className="CardCatalogyHolder">
                <h1>Bo hvor som helst
 </h1>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Card className="CardContainer">
            <Card.Img
              variant="top"
              src="https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=480"
            />
            <Card.Body className="card__info">
              <Card.Title className="card-title">Natur og friluftsreise</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="CardContainer">
            <Card.Img
              variant="top"
              src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
            />
            <Card.Body className="card__info">
              <Card.Title className="card-title">Unike Steder</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          {" "}
          <Card className="CardContainer">
            <Card.Img
              variant="top"
              src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
            />
            <Card.Body className="card__info">
              <Card.Title className="card-title">Hele Hjem</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="CardContainer">
            <Card.Img
              variant="top"
              src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
            />
            <Card.Body className="card__info">
              <Card.Title className="card-title">Kjæledyr tilatt</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        
    )
}
