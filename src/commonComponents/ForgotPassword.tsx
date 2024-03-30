import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from "yup";

interface Tprops {
  visible: boolean;
  cancelModal: () => void;
}

const ForgotPassword = (props: Tprops) => {
  const [render, setRender] = useState(false)

  const cancelHandler = () => {
    props.cancelModal();
    formik.resetForm();
    setRender(!render)
  };

  const handleSubmit = async (formik: any) => {
    let isFormValid = true;
    if (isFormValid) {

      const data = {
        "username": formik.username,
      };

      try {

      } catch (e) {
      } finally {
      }
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Enter your username"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema,
    onSubmit: async () => {
      await handleSubmit(formik.values)
      formik.resetForm();
    },
  });

  useEffect(() => {
    //   formik.setErrors({}, false);
    //   formik.setTouched({}, false);
  }, [render])

  return (
    <>
      <Modal
        show={props.visible}
        onHide={cancelHandler}
        // size="lg"
        style={{ zIndex: "9998" }}
        centered
      >
        <Modal.Header closeButton><h3>Forgot Password</h3></Modal.Header>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body className="mb-3">
            <Row className="d-flex justify-content-center">
              <Col md={12}>
                <Row>
                  <Col md="3" className="mt-2">
                    <Form.Label>
                      Username
                      <span className="text-danger">*</span>
                    </Form.Label>
                  </Col>
                  <Col md="9" className="">
                    <Form.Control
                      type="text"
                      placeholder={"Enter Username"}
                      id="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={""}
                    />
                    {formik.touched.username && formik.errors.username &&
                    <div className='error-message'>{formik.errors.username}</div>}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col md="12" className="p-0">
                <Button
                  onClick={cancelHandler}
                  className='btn btn-dark mx-2'
                >
                  Close
                </Button>
                <Button
                  type='submit'
                >
                  Send Password
                </Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ForgotPassword