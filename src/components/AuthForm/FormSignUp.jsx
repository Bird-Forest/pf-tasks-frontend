import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputText from './InputText';
import InputPassword from './InputPassword';
import { MyStyled } from './Form.styled';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/user/operations';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
});
const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function FormSignUp() {
  const dispatch = useDispatch();
  return (
    <MyStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          dispatch(registerThunk(values));
          resetForm();
        }}
      >
        {props => (
          <Form className="my-form" autoComplete="off">
            <InputText label="Enter your name" name="name" type="text" />
            <InputText label="Enter your email" name="email" type="email" />
            <InputPassword
              label="Enter your password"
              name="password"
              type="password"
            />
            <button type="submit" className="button">
              {props.isSubmitting ? 'loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </MyStyled>
  );
}
