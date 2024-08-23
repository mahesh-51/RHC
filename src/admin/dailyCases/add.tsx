import React from "react";
import { Button, Card, CardBody, Col, FormControl, FormLabel, InputGroup, Row } from "react-bootstrap";
import { Form, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from 'react-select';
import DatepickerComponent from "../../commonComponents/datePicker";
import { getYear } from "date-fns";
import range from "lodash/range";

const AddDailyCases: React.FC = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    caseType: Yup.object().required("Select your caseType"),
    caseNo: Yup.string().required("Enter your caseNo"),
    defendent: Yup.string().required("Enter your defendent"),
    complaintment: Yup.string().required("Select your complaintment"),
    stage: Yup.string().required("Select your courtType"),
    currentDate: Yup.string().trim().required("Select your currentDate"),
    nextDate: Yup.string().trim().required("Select your nextDate"),
  });

  const formik = useFormik({
    initialValues: {
      caseType: "",
      caseNo: "",
      defendent: "",
      complaintment: "",
      stage: "",
      currentDate: "",
      nextDate: ""
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
                    <FormLabel className="d-flex" htmlFor="caseNo">
                      Case No.<span className="text-danger">*</span>
                    </FormLabel>
                    <InputGroup className="d-flex">
                      <FormControl
                        name="caseNo"
                        type="text"
                        id="caseNo"
                        value={formik.values.caseNo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"Enter name"}
                      />
                    </InputGroup>
                    {formik.touched.caseNo && formik.errors.caseNo &&
                      <div className='error-message'>{formik.errors.caseNo}</div>}
                  </Col>
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
                    <FormLabel className="d-flex" htmlFor="defendent">
                      Defendent <span className="text-danger">*</span>
                    </FormLabel>
                    <InputGroup className="d-flex">
                      <FormControl
                        name="defendent"
                        type="text"
                        id="defendent"
                        value={formik.values.defendent}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"Enter defendent"}
                      />
                    </InputGroup>
                    {formik.touched.defendent && formik.errors.defendent &&
                      <div className='error-message'>{formik.errors.defendent}</div>}
                  </Col>
                  <Col md={4}>
                    <FormLabel className="d-flex" htmlFor="complaintment">
                      Complaintment <span className="text-danger">*</span>
                    </FormLabel>
                    <InputGroup className="d-flex">
                      <FormControl
                        name="complaintment"
                        type="text"
                        id="complaintment"
                        value={formik.values.complaintment}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"Enter complaintment"}
                      />
                    </InputGroup>
                    {formik.touched.complaintment && formik.errors.complaintment &&
                      <div className='error-message'>{formik.errors.complaintment}</div>}
                  </Col>
                </Row>

                <Row className='p-2 d-flex justify-content-center'>
                  <Col md={4}>
                    <FormLabel className="d-flex" htmlFor="currentDate">
                      Current Date <span className="text-danger">*</span>
                    </FormLabel>
                    <DatepickerComponent
                      onchange={async (e: any) => {
                        formik.setFieldValue("currentDate", e)
                      }}
                      variableName="currentDate"
                      minDate={new Date()}
                      range={range(getYear(new Date()), getYear(new Date()) + 2, 1)}
                      name="currentDate"
                      onBlur={formik.handleBlur}
                      value={formik.values.currentDate}
                      className=""
                    />
                    {formik.touched.currentDate && formik.errors.currentDate &&
                      <div className='error-message'>{formik.errors.currentDate}</div>}
                  </Col>
                  <Col md={4}>
                    <FormLabel className="d-flex" htmlFor="nextDate">
                      Next Date <span className="text-danger">*</span>
                    </FormLabel>
                    <DatepickerComponent
                      onchange={async (e: any) => {
                        formik.setFieldValue("nextDate", e)
                      }}
                      variableName="nextDate"
                      minDate={new Date()}
                      range={range(getYear(new Date()), getYear(new Date()) + 2, 1)}
                      name="nextDate"
                      onBlur={formik.handleBlur}
                      value={formik.values.nextDate}
                      className=""
                    />
                    {formik.touched.nextDate && formik.errors.nextDate &&
                      <div className='error-message'>{formik.errors.nextDate}</div>}
                  </Col>
                </Row>
                <Row className='p-2 d-flex justify-content-center'>
                  <Col md={8}>
                    <FormLabel className="d-flex" htmlFor="stage">
                      Stage <span className="text-danger">*</span>
                    </FormLabel>
                    <InputGroup className="d-flex">
                      <FormControl
                        name="stage"
                        type="text"
                        id="stage"
                        value={formik.values.stage}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={"Enter stage"}
                      />
                    </InputGroup>
                    {formik.touched.stage && formik.errors.stage &&
                      <div className='error-message'>{formik.errors.stage}</div>}
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

export default AddDailyCases;
