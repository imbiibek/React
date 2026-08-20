import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const RegistrationForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
         Formik New Registration Form
        </h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            password: "",
            gender: "",
          }}

          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = "Required";
            }

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.phone) {
              errors.phone = "Required";
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 6) {
              errors.password = "Password must be at least 6 characters";
            }

            if (!values.gender) {
              errors.gender = "Please select your gender";
            }

            return errors;
          }}

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white p-8 rounded-2xl shadow-sm">

              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-800 mb-2"
                >
                  Name
                </label>

                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full h-11 px-4 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-800 mb-2"
                >
                  Email
                </label>

                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full h-11 px-4 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block text-sm text-gray-800 mb-2"
                >
                  Phone
                </label>

                <Field
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full h-11 px-4 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 mb-2"
                >
                  Password
                </label>

                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full h-11 px-4 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Gender */}
              <div className="mb-7">
                <label className="block text-sm text-gray-800 mb-3">
                  Gender
                </label>

                <div className="flex items-center gap-6">

                  <label className="flex items-center gap-2">
                    <Field
                      type="radio"
                      name="gender"
                      value="Male"
                    />
                    <span>Male</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <Field
                      type="radio"
                      name="gender"
                      value="Female"
                    />
                    <span>Female</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <Field
                      type="radio"
                      name="gender"
                      value="Other"
                    />
                    <span>Other</span>
                  </label>

                </div>

                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-sm mt-2"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;