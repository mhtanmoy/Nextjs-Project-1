import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Col, Container, Row } from "react-bootstrap";
import FormLogin from "../../components/login/FormLogin";
import { AllProductListProps } from "../../utils/types/landingpage";
import { API_BASE_URL } from "../api/hello";

const index: NextPage = () => {
  return (
    <div>
      <Container >
        <br/>
        <br/>
        <Row>
          <Col md={3}>
          </Col>
          <Col md={6}>
          <FormLogin/>
          </Col>
          <Col md={3}>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default index;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch(`${API_BASE_URL}/all-products`);
//   const productsData: AllProductListProps[] = await res.json();

//   if (res.status !== 200) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { productsData },
//   };
// };
