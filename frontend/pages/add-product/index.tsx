import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../components/common/Header";
import { CategoryProps, SingleProductProps } from "../../utils/types/landingpage";
import { RootAppStateProps } from "../../utils/types/reduxTypes";
import { API_BASE_URL } from "../api/hello";

const addProduct = ({
  categoryData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const { userInfo } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingleProductProps>();
  const router = useRouter();

  


  // export const addContact = (data) => async (dispatch) => {
  //   try {
  //        var formData=new FormData();
  //        formData.append('name',data.Name);
  //        formData.append('email',data.Email);
  //        formData.append('phone',data.Phone);
  //        formData.append('image',data.Image);
  //        let response= await Axios.post(`http://localhost:3000/api/contact/addContact`,formData,{
  //           headers:{
  //               'x-auth-token':localStorage.getItem('token')
  //           }
  //        });
  //     } catch (error) {
  //         console.log(error);
  //     }
  //  }

  const onSubmit: SubmitHandler<SingleProductProps> = async (data) => {
    
    //   const request = await fetch(`${API_BASE_URL}/add/product`, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       'Content-type':'application/json',
    //       Authorization: `Bearer ${userInfo['token']}`,
    //     },
    //   });
    // };
    console.log(data)
    var formData=new FormData();
    formData.append('name',data.name);
    formData.append('brand',data.brand);
    formData.append('price',data.price);
    formData.append('SKU',data.SKU);
    formData.append('description',data.description);
    formData.append('category',data.category);
    formData.append('color',data.color);
    formData.append('size',data.size);

    var filesLength=data.file_content.length;
    for(var i=0;i<filesLength;i++){
	  formData.append("file_content", data.file_content[i]);
    }


    
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo["token"]}`,
      },
    };
    
    try {
      const request  = await axios.post(
        `${API_BASE_URL}/add/product`,
        formData,
        config
      );
      if (request.status == 200) {
      
        toast("Successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
      setTimeout(() => router.push('/'), 5000)
      }
    } catch (error) {
      console.log(error);
      toast(`Request Failed. ${error.response.data.details}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }  
  };


  return (
    <div>
      <ToastContainer draggable={false} />
      {/* <Header /> */}
      
      <div>
      
        <Container>
          <br/>
          <Link href="/">
          <text>Go back</text>
          </Link>
          <br/>
          <br/>
          <Row>
          <Col md={3}>
            </Col>
            <Col md={6}>
            </Col>
            <Col md={3}>
            </Col>
          </Row>
          <h1>Add Product</h1>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                id="name"
                
                {...register("name")}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Brand"
                id="brand"
              
                {...register("brand")}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="file_content">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter Photo"
                id="file_content"
                multiple
            
                {...register("file_content")}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                id="price"
        
                {...register("price")}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Category">
              <Form.Label>Select Category</Form.Label>
              <Form.Select {...register("category")}>
                  {categoryData.map((item: CategoryProps) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </Form.Select >             
            </Form.Group>

            {/* <Form.Group controlId="Category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Category"
                id="category"
                required
                {...register("category")}
              ></Form.Control>
            </Form.Group> */}

            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                id="description"
          
                {...register("description")}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Color">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Color"
                id="color"
           
                {...register("color")}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Size">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Size"
                id="size"
          
                {...register("size")}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="SKU">
              <Form.Label>SKU</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter SKU"
                id="SKU"
         
                {...register("SKU")}
              ></Form.Control>
            </Form.Group>
            <br/>
            <Button type="submit" variant="primary">
              Upload
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default addProduct;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resCate = await fetch(`${API_BASE_URL}/category`);
  const categoryData: CategoryProps[] = await resCate.json();

  return {
    props: { categoryData },
  };
};