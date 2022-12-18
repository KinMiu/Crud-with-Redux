import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoPerson, IoLockClosed, IoMail } from 'react-icons/io5';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [role, setRole] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users/register', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate('/user');
    } catch (error) {
      if (error.response) {
        setMsg('Masukan Format dengan benar !!!');
      }
    }
  };
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Add new User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser} className="box">
              <p className="has-tag-centered">{msg}</p>
              <div className="field">
                <label className="label">
                  <IoPerson /> Name
                </label>
                <div className="control">
                  <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                </div>
              </div>
              <div className="field">
                <label className="label">
                  <IoMail /> Email
                </label>
                <div className="control">
                  <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
              </div>
              <div className="field">
                <label className="label">
                  <IoLockClosed /> Password
                </label>
                <div className="control">
                  <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                </div>
              </div>
              <div className="field">
                <label className="label">
                  <IoLockClosed /> Confirmasi Password
                </label>
                <div className="control">
                  <input type="password" className="input" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder="********" />
                </div>
              </div>
              <div className="field">
                <label className="Role">
                  <IoPerson /> Role
                </label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                      <option value="admin">Admin</option>
                      <option value="user">Users</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
