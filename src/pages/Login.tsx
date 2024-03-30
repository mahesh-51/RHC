import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Form, InputGroup, Row } from 'react-bootstrap'

const Login = () => {
  return (
    <div className='p-5'>
      <div className='pb-3 d-flex justify-content-end'>
        <a href="/">
          <Button className='rounded-pill btn btn-dark px-4'>
            Back
          </Button>
        </a>
      </div>
      <Card className='shadow py-5'>
        <CardBody>
          <p className='text-center fs-3'>Login Form</p>
          <div className='d-flex justify-content-center'>
            <div className='py-3'>
            {/* <Card className='shadow-lg'>
              <CardBody className='p-4'> */}
                <Row className='p-2'>
                  <Col md={12}>
                    <Form.Label className="d-flex" htmlFor="email">
                      {"Email"}<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup className="d-flex">
                      <Form.Control
                        name="email"
                        type="email"
                        id="email"
                        placeholder={"Enter email address"}
                      />
                    </InputGroup>
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
                        placeholder={"Enter password"}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className='p-2'>
                  <Col md={12} className='d-flex justify-content-center'>
                    <Button type='submit' className='rounded-pill btn-primary px-4 w-100'>
                      Login
                    </Button>
                  </Col>
                </Row>
                <Row className='px-2 py-3'>
                  <Col md={12}>
                    <a href="#">Forgot your password</a>
                  </Col>
                </Row>
              {/* </CardBody>
            </Card> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Login