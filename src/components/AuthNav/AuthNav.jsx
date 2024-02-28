import { NavLink } from 'react-router-dom';
import { WrapAuthNav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <WrapAuthNav>
      <p>My tasks application</p>
      <p>What can this application do?</p>
      <p>Create a task entry</p>
      <p>Determine task priority</p>
      <p>Mark completed task</p>
      <p>Sort list by date</p>
      <p>Filter by priority</p>
      <p>Delete task</p>

      <NavLink to="/register" className="navigate">
        SignUp
      </NavLink>
      <NavLink to="/login" className="navigate">
        SignIn
      </NavLink>
    </WrapAuthNav>
  );
};
