import React from 'react';
import { useField } from 'formik';
import { ErrorMessage, InputWrap } from './Form.styled';

export default function InputText({ label, ...props }) {
  const [field, meta] = useField(props);
  const errorClass = meta.touched && meta.error ? 'error' : '';
  return (
    <InputWrap>
      <label
        htmlFor={props.id || props.name}
        className={`label-input ${errorClass}`}
      >
        {label}
      </label>
      <input className={`my-input ${errorClass}`} {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </InputWrap>
  );
}
