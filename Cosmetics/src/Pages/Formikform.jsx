import React from "react";
import { Formik } from "formik";

const Formikform = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          gender: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm"
          >

            {/* Heading */}
            <h1 className="text-2xl font-bold text-center text-black mb-8">
              Registration Form
            </h1>

            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm text-gray-800 mb-2"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                className="w-full h-11 px-4 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
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

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                className="w-full h-11 px-4 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
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

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={values.phone}
                onChange={handleChange}
                className="w-full h-11 px-4 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
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

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                className="w-full h-11 px-4 border border-gray-300 rounded-xl outline-none focus:border-blue-500"
              />
            </div>

            {/* Gender */}
            <div className="mb-7">
              <label className="block text-sm text-gray-800 mb-3">
                Gender
              </label>

              <div className="flex items-center gap-6">

                <label className="flex items-center gap-2 text-base">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={values.gender === "Male"}
                    onChange={handleChange}
                  />
                  Male
                </label>

                <label className="flex items-center gap-2 text-base">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={values.gender === "Female"}
                    onChange={handleChange}
                  />
                  Female
                </label>

                <label className="flex items-center gap-2 text-base">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={values.gender === "Other"}
                    onChange={handleChange}
                  />
                  Other
                </label>

              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
              Submit
            </button>

          </form>
        )}
      </Formik>

    </div>
  );
};

export default Formikform;