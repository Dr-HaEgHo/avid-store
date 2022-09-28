import { Icon } from '@iconify/react';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { basicSchema, loginSchema } from '../../schemas/Index';
import {signUp} from "../../firebase"


const onSubmit = async (values, actions) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  await signUp(values.email, values.password)
  actions.resetForm();
  alert("Successfully submitted")
}



const Login = () => {

  const [visible, setVisible] = useState(false)
  
  const handleVisibility = () => {
    setVisible(!visible)

  }

  // const emailRef = useRef()
  // const passwordRef = useRef()

  // const handleSignup = async () => {
  //   await signup(email, password)
  // }


  const { values, errors, touched, handleBlur,  isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password:"",
    },
    validationSchema: loginSchema,
    onSubmit,
  })

  return (
    <div className='container' style={{position:"relative", height:"90vh", }} >
      <div className='login'>
        <h1>Login</h1>
        <div className="li-form">
          <form action='post' onSubmit={handleSubmit} autoComplete='off'>
            <div className='li-input'>
              <input
                value={values.email}
                onChange={handleChange}
                type="email"
                id='email'
                placeholder='Email'
                onBlur={handleBlur}
                className={errors.email && touched.email ? "error" : "not-error"}
              />
              {errors.email && touched.email && <p className='p-error'>{ errors.email }</p>}
            </div>
            <div>
              <div  className={errors.password && touched.password ? "password-error" : "li-password"}>
              <input
                value={values.password}
                onChange={handleChange}
                type={ visible === true ? "text" :"password"}
                id='password'
                placeholder='Confirm Password'
                onBlur={handleBlur}
                style={{border: "none"}}
                />
              <Icon onClick={handleVisibility} style={{color: "#777", fontSize: "26px"}} className='seemore' icon={visible === true ? 'ant-design:eye-invisible-filled': 'ant-design:eye-filled' } />
            </div>
            {errors.password && touched.password && <p className='p-error'>{ errors.password }</p>}
            </div>
            <div className='li-check'>
              <div className="li-check-remember">
                <input type="checkbox" />
                <div className='input'/>
                <span>Remember me</span>
              </div>
              <Link to='/login'><p>forgot password ?</p></Link>
            </div>
            <button disabled={isSubmitting} type='submit' >Login</button>
          </form>
        </div>
        <p>Don't yet have an account ? <Link to='/sign-up' >Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login;