import React, { useEffect } from 'react';
import { FaPenToSquare } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { IoCloseSharp } from 'react-icons/io5';
import {
  Backdrop,
  BtnClose,
  BtnPopUpSave,
  FormTask,
  InputForm,
  TitlePopUp,
  WrapPopUp,
} from './Modal.styled';
import { addTask } from 'redux/tasks/servise';

export default function TaskForm({ onClose }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target.elements.title.value;
    const newTask = { title: text };
    console.log(newTask);
    if (text !== '') {
      dispatch(addTask(newTask));
      event.target.reset();
      onClose();
    }
  };
  return (
    <Backdrop onClick={onClose}>
      <WrapPopUp onClick={e => e.stopPropagation()}>
        <BtnClose onClick={onClose}>
          <IoCloseSharp className="close" />
        </BtnClose>
        <TitlePopUp>Add task</TitlePopUp>
        <FormTask onSubmit={handleSubmit}>
          <InputForm
            className="input-task"
            type="title"
            name="title"
            placeholder="Enter task text..."
          />
          <BtnPopUpSave type="submit">Save</BtnPopUpSave>
          <FaPenToSquare className="icon-add" />
        </FormTask>
      </WrapPopUp>
    </Backdrop>
  );
}
