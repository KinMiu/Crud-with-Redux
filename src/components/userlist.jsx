import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  };
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of users</h2>
      <Link to={'/user/add'} className="button is-primary mb-2">
        Add User
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`/user/edit/${user.uuid}`} className="button is-small is-info">
                  Edit
                </Link>
                <button onClick={() => deleteUser(user.uuid)} className="button is-small is-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
