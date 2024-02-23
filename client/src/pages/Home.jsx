import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/auth/authSlice";
import { NavLink } from "react-router-dom";
import MaterialCard from "../components/MaterialCard";

const Home = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const currentUser = useSelector((state) => state.currentUser);
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    try {
      const user = await axios.get("http://localhost:3000/api/user", {
        withCredentials: true,
      });
      dispatch(setUser(user.data));
      setUserData(user.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getUserData();
    }
  }, []);

  return (
    <div className="container mx-auto mt-5 p-4 text-center">
      {isLoggedIn ? (
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">
            Hello, {userData.username}!
          </h1>
          <h2 className="text-xl font-semibold mb-4">
            Type: {userData.userType}
          </h2>
          <p className="text-lg">
            Welcome back to our awesome platform. Explore and enjoy your time!
          </p>
        </div>
      ) : (
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-lg">
            Sign in or register to access exclusive features and content.
          </p>
          <div className="mt-8 flex justify-center">
            <NavLink
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-lg mr-4 transition duration-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-lg transition duration-300"
            >
              Register
            </NavLink>
          </div>
        </div>
      )}

      <div className="mt-8 bg-gray-200 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold pt-4">
          Find the Material for Your Curriculum
        </h1>
        <MaterialCard />
      </div>
    </div>
  );
};

export default Home;
