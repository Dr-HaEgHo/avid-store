import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../../schemas/Index';


const onSubmit = () => {
  console.log("submitted");
}

const FormikForm = () => {

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword:"",
    },
    validationSchema: basicSchema, 
    onSubmit,
  })

  // console.log(values)
  // console.log(errors)

  return (
    <div style={{width: "40%", background:"#fff", margin:"4rem auto 0 auto", padding:"1rem", }}>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          type="email"
          id='email'
          placeholder='Enter your email'
          onBlur={handleBlur}
          className={errors.email && touched.email ? "error" : "not-error"}
        />
        {errors.email && touched.email && <p className='p-error'>{ errors.email}</p> }
        <label htmlFor="age">Age</label>
        <input
          value={values.age}
          onChange={handleChange}
          type="number"
          id='age'
          placeholder='age'
          onBlur={handleBlur}
          className={errors.age && touched.age ? "error" : "not-error"}
        />
        
        <label htmlFor="password">Password</label>
        <input
          value={values.password}
          onChange={handleChange}
          type="password"
          id='password'
          placeholder='Enter your password'
          onBlur={handleBlur}
          className={errors.password && touched.password ? "error" : "not-error"}
        />
        
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          type="password"
          id='confirmPassword'
          placeholder='Enter your confirmPassword'
          onBlur={handleBlur}
          className={errors.confirmPassword && touched.confirmPassword ? "error" : "not-error"}
        />
        
        <button style={{width: "100%", padding: ".8rem 1rem", borderRadius:"4px", background:"#FFA944"}} type='submit'> Submit</button>
        
      </form>
    </div>
  )
}

export default FormikForm