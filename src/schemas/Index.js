import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

export const basicSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required("Required"),
    phoneNumber: yup.number().min(10).positive().integer().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"), 
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Required")
})

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"), 
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),
    
})