import React, { useEffect } from 'react';
import { FaPenToSquare } from 'react-icons/fa6';
// import { BtnForm, FormTask, InputForm } from './TaskForm.styled';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/tasksSlice';
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
    const title = event.target.elements.title.value;
    if (title !== '') {
      dispatch(addTask(title));
      event.target.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
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
