import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Header from "../../components/common/Header";
import Details from "../../components/product-details/Details";
import { SingleProductProps } from "../../utils/types/landingpage";
import { API_BASE_URL } from "../api/hello";

const ProductDetails: NextPage =({
  product
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
  return (
    <div>
      <Header />
      <div>
      <Details product={product}/>
      </div>
    </div>
  );
}

export default ProductDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;

  const productRes = await fetch(`${API_BASE_URL}/product-details/${id}`);
  const product: SingleProductProps[] = await productRes.json();

  return { props: { product } };
};