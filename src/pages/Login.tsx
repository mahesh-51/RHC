import { useState } from 'react'
import { Button, Card, CardBody, Col, Form, InputGroup, Row } from 'react-bootstrap'
import ForgotPassword from '../commonComponents/ForgotPassword';
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [isVisibleForgotPassword, setIsVisibleForgotPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Enter your username"),
    password: Yup.string().required("Enter your password"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async () => {
      await handleSubmit(formik.values)
    },
  });

  const handleSubmit = async (formik: any) => {
    console.log(formik)
    
  };


  return (
    <>
      <ForgotPassword
        visible={isVisibleForgotPassword}
        cancelModal={() => setIsVisibleForgotPassword(false)}
      />

      <div className='p-5'>
        <div className='pb-3 d-flex justify-content-end'>
          <a href="/">
            <Button className='rounded-pill btn btn-dark px-4 shadow-lg'>
              Back
            </Button>
          </a>
        </div>
        <Card className='shadow py-5'>
          <CardBody>
            <p className='text-center fs-3'>Login Form</p>
            <div className='d-flex justify-content-center'>
              <div className='py-3'>
                <Form onSubmit={formik.handleSubmit}>
                  <Row className='p-2'>
                    <Col md={12}>
                      <Form.Label className="d-flex" htmlFor="username">
                        {"Username"}<span className="text-danger">*</span>
                      </Form.Label>
                      <InputGroup className="d-flex">
                        <Form.Control
                          name="username"
                          type="text"
                          id="username"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder={"Enter Username"}
                        />
                      </InputGroup>
                      {formik.touched.username && formik.errors.username &&
                        <div className='error-message'>{formik.errors.username}</div>}
                    </Col>
                  </Row>
                  <Row className='p-2'>
                    <Col md={12}>
                      <Form.Label className="d-flex" htmlFor="password">
                        {"Password"}<span className="text-danger">*</span>
                      </Form.Label>
                      <InputGroup className="d-flex">
                        <Form.Control
                          name="password"
                          type="password"
                          id="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder={"Enter password"}
                        />
                      </InputGroup>
                      {formik.touched.password && formik.errors.password &&
                        <div className='error-message'>{formik.errors.password}</div>}
                    </Col>
                  </Row>
                  <Row className='px-2 '>
                    <Col md={12} className='text-end'>
                      <p className='m-0 link' onClick={() => setIsVisibleForgotPassword(true)}>Forgot password ?</p>
                    </Col>
                  </Row>
                  <Row className='p-2'>
                    <Col md={12} className='d-flex justify-content-center'>
                      <Button type='submit' className='rounded-pill btn-primary px-4 w-100 shadow-lg'>
                        Login
                      </Button>
                    </Col>
                  </Row>
                  <Row className='px-2 py-2'>
                    <Col md={12} className='text-start'>
                      <a href="#">Reset Password</a>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Login