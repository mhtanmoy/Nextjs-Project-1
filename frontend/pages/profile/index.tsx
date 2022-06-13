import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootAppStateProps } from "../../utils/types/reduxTypes";

const Details = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { userInfo } = useSelector(
        (state: RootAppStateProps) => state.AuthReducer
    );
    return (
    <Container>
      <Row>
        <Col md={3}>
          
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
                    <div>
                         Email: <strong>{userInfo && userInfo["email"] && (userInfo["email"])}</strong>
                    </div>
            </ListGroup.Item>
            {/* <ListGroup.Item>Price : BDT{product["price"]}</ListGroup.Item> */}
            {/* <ListGroup.Item> */}
              {/* Description : {product["description"]}
            </ListGroup.Item> */}
            <ListGroup.Item>
              {/* Brand : {product["brand"]} */}
            </ListGroup.Item>
            <ListGroup.Item>
              {/* Color : {product["color"]} */}
            </ListGroup.Item>
            <ListGroup.Item>
              {/* Size : {product["size"]} */}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;