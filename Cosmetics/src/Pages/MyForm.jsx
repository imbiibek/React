import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>

          {/* Name */}
          <label>Name</label>

          <Field
            type="text"
            name="name"
          />

          {touched.name && errors.name && (
            <p>{errors.name}</p>
          )}


          {/* Email */}
          <label>Email</label>

          <Field
            type="email"
            name="email"
          />

          {touched.email && errors.email && (
            <p  className="text-red-500">{errors.email}</p>
          )}


          {/* Password */}
          <label>Password</label>

          <Field
            type="password"
            name="password"
          />

          {touched.password && errors.password && (
            <p>{errors.password}</p>
          )}


          <button type="submit">
            Submit
          </button>

        </Form>
      )}
    </Formik>
  );
};

export default MyForm;