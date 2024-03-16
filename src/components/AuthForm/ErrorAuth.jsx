import React from 'react';
import { SiNotepadplusplus } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { WrapAuthError } from './Form.styled';

export default function ErrorAuth({ error }) {
  return (
    <WrapAuthError>
      {error === 'Request failed with status code 401' && (
        <>
          <h3 className="error-text">Email or password is wrong</h3>
          <div className="wrap-error">
            <SiNotepadplusplus className="icon-lizard" />
            <Link to="/" className="error-link">
              Forgot your password ?
            </Link>
          </div>
        </>
      )}
      {error === 'Request failed with status code 409' && (
        <>
          <h3 className="error-text">This user already exists</h3>
          <div className="wrap-error">
            <SiNotepadplusplus className="icon-lizard" />
            <Link to="/login" className="error-link">
              Please Sign In
            </Link>
          </div>
        </>
      )}
    </WrapAuthError>
  );
}
