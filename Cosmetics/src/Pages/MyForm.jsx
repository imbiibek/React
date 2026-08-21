import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "@/redux/blogSlice";

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

  // Redux
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.blog);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">

        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Sign Up
        </h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}

          validationSchema={validationSchema}

          onSubmit={(values) => {

            console.log(values);

            // Send data to Redux
            dispatch(addBlog(values));

          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>

                <Field
                  id="name"
                  type="text"
                  name="name"
                  className={`w-full border-2 rounded-md px-3 py-2 outline-none transition-colors
                    ${
                      touched.name && errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500"
                    }`}
                />

                {touched.name && errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>

                <Field
                  id="email"
                  type="email"
                  name="email"
                  className={`w-full border-2 rounded-md px-3 py-2 outline-none transition-colors
                    ${
                      touched.email && errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500"
                    }`}
                />

                {touched.email && errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>

                <Field
                  id="password"
                  type="password"
                  name="password"
                  className={`w-full border-2 rounded-md px-3 py-2 outline-none transition-colors
                    ${
                      touched.password && errors.password
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-blue-500"
                    }`}
                />

                {touched.password && errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors"
              >
                Submit
              </button>

            </Form>
          )}
        </Formik>

        {/* Display Redux data */}
        <div className="mt-6">
          <h2 className="font-semibold">Redux Data:</h2>

          {posts.map((post, index) => (
            <div key={index}>
              <p>{post.name}</p>
              <p>{post.email}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MyForm;