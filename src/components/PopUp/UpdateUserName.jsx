import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { BtnPopUpSave, NamePopUp, WrapUpdate } from './Modal.styled';
import { updateUser } from 'redux/user/operations';

export default function UpdateUserName() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <NamePopUp>
      <h4 className="title-name">Your name</h4>
      <Formik
        initialValues={{ name: user.name }}
        onSubmit={(values, actions) => {
          // console.log(values);
          actions.setSubmitting(false);
          dispatch(updateUser(values));
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <WrapUpdate>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
                className="input-name"
              />
              <BtnPopUpSave type="submit">Save</BtnPopUpSave>
            </WrapUpdate>
          </form>
        )}
      </Formik>
    </NamePopUp>
  );
}
