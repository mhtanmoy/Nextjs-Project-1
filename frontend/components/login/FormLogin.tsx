import React, { useEffect } from "react";
import { RootAppStateProps, userSignupProps } from "../../utils/types/reduxTypes";
import { LoginProps } from "../../utils/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../../pages/api/hello";
import { loginAction, saveUserinfoAction } from "../../store/users/actions";
import { useRouter } from "next/router";

const FormLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo } = useSelector(
    (state: RootAppStateProps) => state.AuthReducer
  );

  // useEffect(() => {
  //   if (userInfo) {
  //     router.push('/');
  //   }
  // }, [router,userInfo]);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit: SubmitHandler<LoginProps> = async (data) => {
    const request = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (request.status === 200) {
      const response: userSignupProps = await request.json();
      dispatch(loginAction(true));
      dispatch(saveUserinfoAction(response));
      toast("Login Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => router.push('/'), 5000)
      
    } else {
      const response = await request.json();
      toast(`Login Failed. ${response["details"]}`, {
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
      <ToastContainer containerId="an id" draggable={false} />
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="email"
            required
            {...register("email", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            required
            {...register("password", { required: true })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormLogin;
