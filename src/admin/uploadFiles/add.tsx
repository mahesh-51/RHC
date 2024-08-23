import React from "react";
import { Button, Card, CardBody, Col, FormControl, FormLabel, InputGroup, Row } from "react-bootstrap";
import { Form, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from 'react-select';

const AddUploadFiles: React.FC = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Enter your name"),
    contact: Yup.string().required("Enter your contact"),
    caseType: Yup.object().required("Select your caseType"),
    courtType: Yup.object().required("Select your courtType"),
    file: Yup.string().required("Select your file"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      caseType: "",
      courtType: "",
      file: ""
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
    <div className="p-3">
      <h3 className="text-center display-6 py-2">Add Court</h3>
      <Card className='shadow py-5'>
        <CardBody>
          <Row>
            <Col md={12}>
              <Form onSubmit={formik.handleSubmit}>
                <Row className='p-2 d-flex justify-content-center'>
                  <Col md={4}>
                    <FormLabel className="d-flex" htmlFor="name">
                      Name<span className="text-danger">*</span>
                    </FormLabel>
                    <InputGroup className="d-flex">
                      <FormControl
                        name="name"
                        type="text"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"Enter name"}
                      />
                    </InputGroup>
                    {formik.touched.name && formik.errors.name &&
                      <div className='error-message'>{formik.errors.name}</div>}
                  </Col>
                </Row>
                <Row className='p-2 d-flex justify-content-center'>
                  <Col md={4}>
                    <FormLabel className="d-flex" htmlFor="contact">
                      Contact <span className="text-danger">*</span>
                    </FormLabel>
                    <InputGroup className="d-flex">
                      <FormControl
                        name="contact"
                        type="text"
                        id="contact"
                        value={formik.values.contact}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"Enter contact"}
                      />
                    </InputGroup>
                    {formik.touched.contact && formik.errors.contact &&
                      <div className='error-message'>{formik.errors.contact}</div>}
                  </Col>
                </Row>

                <Row className='p-2 d-flex justify-content-center'>
                  <Col md={4}>
                    <FormLabel className="d-flex" htmlFor="caseType">
                      Case Type<span className="text-danger">*</span>
                    </FormLabel>
                    <Select
                      name="caseType"
                      placeholder={"Enter caseType"}
                      value={formik.values.caseType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    // options={options}
                    />
                    {formik.touched.caseType && formik.errors.caseType &&
                      <div className='error-message'>{formik.errors.caseType}</div>}
                  </Col>
                </Row>
                <Row className='p-2 d-flex justify-content-center'>
                  <Col md={4}>
                    <FormLabel className="d-flex" htmlFor="courtType">
                      Court Type<span className="text-danger">*</span>
                    </FormLabel>
                    <Select
                      name="courtType"
                      placeholder={"Enter courtType"}
                      value={formik.values.courtType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    // options={options}
                    />
                    {formik.touched.courtType && formik.errors.courtType &&
                      <div className='error-message'>{formik.errors.courtType}</div>}
                  </Col>
                </Row>
                <Row className='p-2 d-flex justify-content-center'>
                  <Col md={4}>
                    <FormLabel className="d-flex" htmlFor="file">
                      Files<span className="text-danger">*</span>
                    </FormLabel>
                    <InputGroup className="d-flex">
                      <FormControl
                        name="file"
                        type="file"
                        id="file"
                        value={formik.values.contact}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"Select file"}
                      />
                    </InputGroup>
                    {formik.touched.file && formik.errors.file &&
                      <div className='error-message'>{formik.errors.file}</div>}
                  </Col>
                </Row>

                <Row className='p-2 d-flex justify-content-center'>
                  <Col md={2} className=''>
                    <Button type='submit' className='primary-custom-button px-4 w-100 shadow-lg'>
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddUploadFiles;
