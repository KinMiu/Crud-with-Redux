import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './components/login';
import User from './pages/users';
import Product from './pages/product';
import AddUser from './pages/adduser';
import EditUser from './pages/editUser';
import AddProduct from './pages/addProduct';
import EditProduct from './pages/editProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
