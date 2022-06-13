import React from "react";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { SingleProductProps } from "../../utils/types/landingpage";
import SimpleImageSlider from "react-simple-image-slider";

const Details = ({ product }: { product: SingleProductProps[] }) => {

  let images = product["img"];
  var imageLength=images.length;
  var img=[];
  for(var i=0;i<imageLength;i++){
	  img.push({ url: `http://localhost:8000${images[i].media}` })
    }
  

  return (
    <Container>
      <Row>
        <Col>
          <SimpleImageSlider
            width={400}
            height={400}
            images={img}
            showBullets={true}
            showNavs={true}
      />
          {/* <Image src={`http://localhost:8000${simage}`} fluid /> */}
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3> {product["name"]} </h3>
            </ListGroup.Item>
            <ListGroup.Item>Price : {Math.ceil(product["price"])} BDT</ListGroup.Item>
            <ListGroup.Item>
            {product["description"] && (<div>Description : {product["description"]}</div>)}
            </ListGroup.Item>
            <ListGroup.Item>
            {product["brand"] && (<div>Brand : {product["brand"]}</div>)}
            </ListGroup.Item>
            <ListGroup.Item>
            {product["color"] && (<div>Color : {product["color"]}</div>)}
            </ListGroup.Item>
            <ListGroup.Item>
            {product["size"] && (<div>Size : {product["size"]}</div>)}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{Math.ceil(product["price"])} BDT</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;