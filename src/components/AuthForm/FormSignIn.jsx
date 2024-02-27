import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputText from './InputText';
import InputPassword from './InputPassword';
import { MyStyled } from './Form.styled';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('This field is required'),
  password: Yup.string().required('This field is required'),
});
const initialValues = {
  email: '',
  password: '',
};

export default function FormSignIn() {
  return (
    <MyStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
            resetForm();
          }, 200);
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
