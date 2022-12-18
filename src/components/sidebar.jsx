import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, reset } from '../features/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';

import { IoPerson, IoPricetag, IoHome, IoLogOut } from 'react-icons/io5';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate('/');
  };
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to="/dashboard">
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/product">
              <IoPricetag /> Products
            </NavLink>
          </li>
        </ul>
        {user && user.role === 'admin' && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to="/user">
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <p className="menu-label">Setting</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
