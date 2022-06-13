import Link from "next/link";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { SingleProductProps } from "../../utils/types/landingpage";


const Allproduct = ({ product }: { product: SingleProductProps[] }) => {
  let images = product["img"];
  let simage = images[0].media;

  return (
  <Container>
    <Card className="my-3 p-3 rounded" style={{ width: '18rem' }}>
    <Link href={`product-details?id=${product["id"]}`}>
    <Card.Img variant="top" src={`http://localhost:8000${simage}`} fluid />
    </Link>
    <Card.Body>
    <Link href={`product-details?id=${product["id"]}`}>
      <Card.Title>{product["name"]}</Card.Title>
    </Link>
        <Card.Text>
        {Math.ceil(product["price"])} BDT
        </Card.Text>
        <Card.Text>
        {product["brand"] && "Brand :"}<strong>&nbsp; {product["brand"]}</strong>
        </Card.Text>
    </Card.Body>
    </Card>
  </Container>
  );
};

export default Allproduct;

