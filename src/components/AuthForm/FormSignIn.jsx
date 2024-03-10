import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputText from './InputText';
import InputPassword from './InputPassword';
import { MyStyled } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/user/operations';
import { selectErrorUser } from 'redux/selectors';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
});
const initialValues = {
  email: '',
  password: '',
};

export default function FormSignIn() {
  const dispatch = useDispatch();
  const message = useSelector(selectErrorUser);
  console.log(message);
  return (
    <MyStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setSubmitting(true);
          dispatch(loginThunk(values));
          resetForm();
        }}
      >
        {props => (
          <Form className="my-form" autoComplete="off">
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
