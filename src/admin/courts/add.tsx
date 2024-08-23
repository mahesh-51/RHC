import React from "react";
import { Button, Card, CardBody, Col, FormControl, FormLabel, InputGroup, Row } from "react-bootstrap";
import { Form, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from 'react-select';

const AddCourt: React.FC = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    courtName: Yup.string().required("Enter your courtName"),
    caseType: Yup.object().required("Select your caseType"),
  });

  const formik = useFormik({
    initialValues: {
      courtName: "",
      caseType: "",
    },
    validationSchema,
    onSubmit: async () => {
      await handleSubmit(formik.values)
    },
  });

  const handleSubmit = async (formik: any) => {
    console.log(formik)
    // navigate("/dashboard")
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
                    <FormLabel className="d-flex" htmlFor="courtName">
                      Court Name<span className="text-danger">*</span>
                    </FormLabel>
                    <InputGroup className="d-flex">
                      <FormControl
                        name="courtName"
                        type="text"
                        id="courtName"
                        value={formik.values.courtName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"Enter courtName"}
                      />
                    </InputGroup>
                    {formik.touched.courtName && formik.errors.courtName &&
                      <div className='error-message'>{formik.errors.courtName}</div>}
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

export default AddCourt;
