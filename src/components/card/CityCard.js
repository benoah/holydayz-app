import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";



export default function CityCard() {
    return (
        <Container className="CityCardContainer">
        <h1>Utforsk i nærheten</h1>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Card className="CityCardContainerHolder">
              <Card.Img
                variant="top"
                src="https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=480"
              />
              <Card.Body className="card__info">
                <Card.Title className="card-title">Card title</Card.Title>
                <Card.Text className="card__info__description">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="CityCardContainerHolder">
              <Card.Img
                variant="top"
                src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
              />
              <Card.Body className="card__info">
                <Card.Title className="card-title">Card title</Card.Title>
                <Card.Text className="card__info__description">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            {" "}
            <Card className="CityCardContainerHolder">
              <Card.Img
                variant="top"
                src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
              />
              <Card.Body className="card__info">
                <Card.Title className="card-title">Card title</Card.Title>
                <Card.Text className="card__info__description">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="CityCardContainerHolder">
              <Card.Img
                variant="top"
                src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
              />
              <Card.Body className="card__info">
                <Card.Title className="card-title">Card title</Card.Title>
                <Card.Text className="card__info__description">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
   
    )
}
