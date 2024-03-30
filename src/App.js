import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Products from "./components/shopData/Products";
import SignIn from "./components/sign/signIn";
import SignUP from "./components/sign/SignUP";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Error from "./components/erroePage/Error";
import Dashboard from "./components/dashboard/dashboard";
import Details from "./components/details/details";
import AddProducts from "./components/addProducts/addProducts";
import Edit from "./components/edit/edit";
import ShoppingCart from "./components/shopingCart/ShoppingCart";
import Store from "../src/Contexts/globalContext";
import Profile from "./components/profile/profile";
import axios from "axios";
import Admin from "./components/admin/admin";
import EditUser from "./components/editUser/EditUser";
import Users from "./components/Users/Users";
import AdminAuth from "./Authentication/adminAimuth";
import AuthProfile from "./Authentication/authProfile";
import AddUser from "./components/Users/addUser";
import DetailsUsers from "./components/Users/detailsUsers";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [addToShoping, setAddToShoping] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://data-pfz0.onrender.com/products`,
    }).then((res) => setProductsData(res.data));
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://data-pfz0.onrender.com/users`,
    }).then((res) => setUsersData(res.data));
  }, []);

  const addNumber = (product) => {
    let add = addToShoping.map((prod) => {
      if (product.id === prod.id) {
        product.count++;
      }
      return prod;
    });
    setAddToShoping(add);
  };

  const minusNumber = (product) => {
    let add = addToShoping.map((prod) => {
      if (product.id === prod.id) {
        product.count > 1 && product.count--;
      }
      return prod;
    });
    setAddToShoping(add);
  };

  const deletCart = (product) => {
    let deletCarts = addToShoping.filter((prod) => {
      if (product.id !== prod.id) {
        return prod;
      }
    });
    setAddToShoping(deletCarts);
  };

  const addToCart = (product) => {
    let updateProducts = addToShoping.some((prod) => {
      return product.id === prod.id;
    });
    if (!updateProducts) {
      setAddToShoping([...addToShoping, { ...product, count: 1 }]);
    }
  };
  return (
    <div>
      <Store.Provider
        value={{
          usersData,
          productsData,
          addToShoping,
          addToCart,
          deletCart,
          minusNumber,
          addNumber,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUP />} />
          <Route
            path="/admin"
            element={
              <AdminAuth>
                <Admin />
              </AdminAuth>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminAuth>
                <Users />
              </AdminAuth>
            }
          />
          <Route
            path="/admin/users/addUser"
            element={
              <AdminAuth>
                <AddUser />
              </AdminAuth>
            }
          />
          <Route
            path="/admin/users/detailsUser/:userId"
            element={
              <AdminAuth>
                <DetailsUsers />
              </AdminAuth>
            }
          />
          <Route
            path="/admin/dashbord"
            element={
              <AdminAuth>
                <Dashboard />
              </AdminAuth>
            }
          />
          <Route
            path="/admin/details/:productId"
            element={
              <AdminAuth>
                <Details />
              </AdminAuth>
            }
          />
          <Route
            path="/admin/addProducts"
            element={
              <AdminAuth>
                <AddProducts />
              </AdminAuth>
            }
          />
          <Route
            path="/admin/editProduct/:editId"
            element={
              <AdminAuth>
                <Edit />
              </AdminAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthProfile>
                <Profile />
              </AuthProfile>
            }
          />
          <Route
            path="/profile/editUser/:editUser"
            element={
              <AuthProfile>
                <EditUser />
              </AuthProfile>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/shoppingCart" element={<ShoppingCart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Store.Provider>
    </div>
  );
};
export default App;
