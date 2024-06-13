import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';
import clsx from 'clsx';

const getLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export const AuthNav = () => {
    return (
        <div>
            <NavLink className={getLinkClass} to="/registration">
                Registration
            </NavLink>
            <NavLink className={getLinkClass} to="login">
                Log In
            </NavLink>
        </div>
    );
};