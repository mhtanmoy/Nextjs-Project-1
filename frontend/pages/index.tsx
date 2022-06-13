import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Allproduct from "../components/all-product/Allproduct";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { allProductsListAction } from "../store/products/actions";
import { AllProductListProps } from "../utils/types/landingpage";
import { API_BASE_URL } from "./api/hello";

const index: NextPage = ({
  productsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const dispatch=useDispatch();
  dispatch(allProductsListAction(productsData));
  

  return (
    <div>
     <Header/>
     <Row>
     {productsData.map(product=>(
        <Col key={product.id} sm={12} md={6} lg={3} xl={3}>
          <Allproduct product={product}/> 
        </Col>
        ))}
     </Row>
     <Footer/>
   </div>
  );
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${API_BASE_URL}/all-products`);
  const productsData: AllProductListProps[] = await res.json();

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  return {
    props: { productsData },
  };
};
