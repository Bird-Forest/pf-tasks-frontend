import React, { useState } from 'react';
import { useField } from 'formik';
import { ErrorMessage, InputWrap, ShowPasswordBtn } from './Form.styled';
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi';

export default function InputPassword({ label, ...props }) {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const errorClass = meta.touched && meta.error ? 'error' : '';
  return (
    <InputWrap>
      <label
        htmlFor={props.id || props.name}
        className={`label-input ${errorClass}`}
      >
        {label}
      </label>
      <input
        className={`my-password ${errorClass}`}
        {...field}
        {...props}
        type={showPassword ? 'text' : 'password'}
      />
      <ShowPasswordBtn onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? (
          <PiEyeLight className="icon-eye" />
        ) : (
          <PiEyeSlash className="icon-eye" />
        )}
      </ShowPasswordBtn>
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </InputWrap>
  );
}
