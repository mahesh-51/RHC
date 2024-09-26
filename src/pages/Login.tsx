import { Input, Button } from "antd";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { IAuthBody } from "../types/authTypes";
import { Toaster } from 'react-hot-toast';
import * as Yup from "yup";
import "../loginForm.css";
import { PASSWORD_MAXLENGTH } from "../config/Constant";
import { customError } from "../config/commonFunction";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: IAuthBody) => {
    console.log("Submitting form", values);
    try {
      const request = {
        email: values.email,
        password: values.password,
      };

      navigate("/admin/dashboard")

    } catch (error: any) {
      customError("Login unsuccessful. Please try again.");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .trim()
      .required("Password is required")
      .max(PASSWORD_MAXLENGTH),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <>
      <section className="login-container">
        <form className="login-card" onSubmit={formik.handleSubmit}>
          <div className="login-content d-flex flex-column justify-content-start align-self-start gap-3">
            <h2 className="login-title">Login</h2>
            <div className="form-group w-100 d-flex flex-column justify-content-start align-items-start">
              <label htmlFor="email" className="form-label">
                Email <span className="required">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`form-input ${formik.touched.email && formik.errors.email
                    ? "input-error"
                    : ""
                  }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error-message">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group w-100 d-flex flex-column justify-content-start align-items-start">
              <label htmlFor="password" className="form-label">
                Password <span className="required">*</span>
              </label>
              <div className="password-wrapper w-100">
                <Input.Password
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`form-input w-100 ${formik.touched.password && formik.errors.password
                      ? "input-error"
                      : ""
                    }`}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="error-message">
                  {formik.errors.password.split("\n").map((msg, index) => (
                    <div
                      className=" d-flex flex-column justify-content-start align-items-start"
                      key={index}
                    >
                      {msg}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="forgot-password-link">
              <Link to="#" className=" text-black text-decoration-none ">
                Forgot Password
              </Link>
            </div>
            <Button
              type="primary"
              block
              htmlType="submit"
              className="login-button"
            >
              Login
            </Button>
          </div>
        </form>
      </section>
      <Toaster />
    </>
  );
};

export default LoginPage;
