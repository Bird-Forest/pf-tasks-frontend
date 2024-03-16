import React, { useRef, useState } from 'react';
import { AvatarPopUp } from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from 'redux/user/operations';
import { FaUserSecret } from 'react-icons/fa';
import { selectUser } from 'redux/selectors';
import { FaArrowUp } from 'react-icons/fa';

export default function UploadFile() {
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const avatar = user.avatarURL;

  const handleChange = evt => {
    // console.log(evt.target.files);
    setSelectedFile(evt.target.files[0]);
  };
  const handleUpload = () => {
    if (!selectedFile) {
      alert('select a file');
      return;
    }
    const formData = new FormData();
    const file = selectedFile;
    formData.append('file', file);

    dispatch(updateAvatar(formData));
  };

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <AvatarPopUp>
      {avatar === null ? (
        <FaUserSecret className="icon-avatar" />
      ) : (
        <img src={avatar} alt="avatar" className="avatar-img" />
      )}

      <input
        accept="image/*, .png, .jpg, .web,"
        type="file"
        ref={filePicker}
        onChange={handleChange}
        className="input-hidden"
        // multiple
      />
      <button onClick={handlePick} className="btn-choose">
        <FaArrowUp className="btn-arrow" />
      </button>
      <button onClick={handleUpload}>Upload</button>
    </AvatarPopUp>
  );
}
