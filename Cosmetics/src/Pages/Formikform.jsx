import { Formik } from 'formik'
import React from 'react'

const Formikform = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={((values) =>
          console.log(values)
        )}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" value={values.name} onChange={handleChange} name='name' />
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Formikform