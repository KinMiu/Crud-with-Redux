import React, { useEffect } from 'react';
import Layout from './layout';
import AddUser from '../components/addUser';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const AddUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate('/');
    }
    if (user && user.role !== 'admin') {
      navigate('/dashboard');
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <AddUser />
    </Layout>
  );
};

export default AddUsers;
