import { Icon } from '@iconify/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik'
import { basicSchema } from '../../schemas/Index'
import { signUp } from '../../firebase'

const SignUp = () => {


  const [visible, setVisible] = useState(false)

  const handleVisibility = () => {
    setVisible(!visible)
  }

  const onSubmit = async(values, actions) => {
    await signUp(values.email, values.password)
    .then()
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    alert("Successfully submitted")
  }
    

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email:"",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema, 
      onSubmit,
    })
  
  console.log(errors)
 
  return (
    <div className='container' style={{
      height: "90vh", display: "flex", alignItems:"center", justifyContent:"center"
    }} >
      <div className="sign-up">
        <h1>Sign Up</h1>
        <div className="su-form">
          <form onSubmit={handleSubmit} autoComplete='off'>
            <div>
              <input
              value={values.firstName}
              onChange={handleChange}
              type="text"
              id='firstName'
              placeholder='First Name'
              onBlur={handleBlur}
              className={errors.firstName && touched.firstName ? "error" : "not-error"}
            />
            {errors.firstName && touched.firstName && <p className='p-error'>{ errors.firstName }</p>}
            </div>


            <div>
              <input
               value={values.lastName}
               onChange={handleChange}
               type="text"
               id='lastName'
               placeholder='Last Name'
               onBlur={handleBlur}
               className={errors.lastName && touched.lastName ? "error" : "not-error"}
            />
            {errors.lastName && touched.lastName && <p className='p-error'>{ errors.lastName }</p>}
            </div>


            <div>
              <input
               value={values.phoneNumber}
               onChange={handleChange}
               type="number"
               id='phoneNumber'
               placeholder='Phone number'
               onBlur={handleBlur}
               className={errors.phoneNumber && touched.phoneNumber ? "error" : "not-error"}
            />
            {errors.phoneNumber && touched.phoneNumber && <p className='p-error'>{ errors.phoneNumber }</p>}
            </div>


            <div>
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
              <div className={errors.password && touched.password ? "password-error" : "su-password"}>
              <input
                value={values.password}
                onChange={handleChange}
                type={ visible === true ? "text" :"password"}
                id='password'
                placeholder='Password'
                onBlur={handleBlur}
                style={{border: "none"}}
              />
              <Icon onClick={handleVisibility} style={{color: "#777", fontSize: "26px"}} className='seemore' icon={visible === true ? 'ant-design:eye-invisible-filled': 'ant-design:eye-filled' } />
            </div>
            {errors.password && touched.password && <p className='p-error'>{ errors.password }</p>}
            </div>


            <div>
              <div className={errors.confirmPassword && touched.confirmPassword ? "password-error" : "su-password"}>
              <input
                value={values.confirmPassword}
                onChange={handleChange}
                type={ visible === true ? "text" :"password"}
                id='confirmPassword'
                placeholder='Confirm Password'
                onBlur={handleBlur}
                style={{border: "none"}}
              />
              <Icon onClick={handleVisibility} style={{color: "#777", fontSize: "26px"}} className='seemore' icon={visible === true ? 'ant-design:eye-invisible-filled': 'ant-design:eye-filled' } />

              </div>
              {errors.confirmPassword && touched.confirmPassword && <p className='p-error'>{ errors.confirmPassword }</p>}
            </div>
            <button>Sign Up</button>
          </form>
        </div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default SignUp