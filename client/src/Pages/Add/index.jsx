import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './add.scss'
import axios  from 'axios';
const SignupSchema = Yup.object().shape({
  img: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
      tittle: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  info: Yup.string().required('Required'),
  job: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
});
function Add() {
  return (
   <>
    <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
        img: '',
         tittle: '',
         info: '',
         name:'',
         job:'',
         price:'',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        const arr={
          img: values.img,
         tittle:  values.tittle,
         info: values.info,
         name:values.name,
         job:values.job,
         price:values.price,

         

        }

        axios.post("http://localhost:4000/courses",arr)
         alert("added")
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
       <div className='form'>  <Form>
       <Field name="img" />
       {errors.img && touched.img ? (
         <div>{errors.img}</div>
       ) : null}
       <br/>
       <Field name="tittle" />
       {errors.tittle && touched.tittle ? (
         <div>{errors.tittle}</div>
       ) : null}
        <br/>
       <Field name="info"  />
       {errors.info && touched.info ? <div>{errors.info}</div> : null}
       <br/>
       <Field name="name"  />
       {errors.info && touched.name ? <div>{errors.name}</div> : null}
       <br/>
       <Field name="job"  />
       {errors.info && touched.job ? <div>{errors.job}</div> : null}
       <br/>
       <Field name="price" type="number" />
       <br/>
       {errors.info && touched.price ? <div>{errors.price}</div> : null}
       <br/>
       <button type="submit" className='btn b btn-primary'>Submit</button>
       <br/>
     </Form></div>
       )}
     </Formik>
   </div>
   </>
  )
}

export default Add