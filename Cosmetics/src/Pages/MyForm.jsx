import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, updateBlog } from "@/redux/blogSlice";

const getValidationSchema = (isEditing) =>
  Yup.object({
    name: Yup.string().required("Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    // Password is only required when creating a new entry.
    // When editing, leave it blank to keep the existing password.
    password: isEditing
      ? Yup.string().min(8, "Password must be at least 8 characters")
      : Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
  });

const MyForm = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  const location = useLocation();

  // If we arrived here from the FormData page's "Edit" button,
  // location.state.editId will tell us which post to edit.
  const [editingId, setEditingId] = useState(location.state?.editId ?? null);
  const editingPost = posts.find((post) => post.id === editingId);
  const isEditing = Boolean(editingPost);

  const initialValues = editingPost
    ? { name: editingPost.name, email: editingPost.email, password: "" }
    : { name: "", email: "", password: "" };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          {isEditing ? "Edit Entry" : "Sign Up"}
        </h1>

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={getValidationSchema(isEditing)}
          onSubmit={(values, { resetForm }) => {
            if (isEditing) {
              // Only overwrite the password if the user typed a new one
              const payload = {
                id: editingId,
                name: values.name,
                email: values.email,
                ...(values.password ? { password: values.password } : {}),
              };
              dispatch(updateBlog(payload));
            } else {
              dispatch(addBlog(values));
            }

            resetForm();
            setEditingId(null);
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
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password{" "}
                  {isEditing && (
                    <span className="text-gray-400 font-normal">
                      (leave blank to keep current)
                    </span>
                  )}
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

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors"
                >
                  {isEditing ? "Update" : "Submit"}
                </button>

                {isEditing && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="flex-1 bg-gray-200 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MyForm;