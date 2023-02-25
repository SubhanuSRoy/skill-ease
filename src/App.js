import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Converse from "./pages/Seeker/Converse";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userType = useSelector((state) => state.auth.userType);
  return (
    <div>
      {/* {!isLoggedIn && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )} */}
      {/* {isLoggedIn && (
        <Routes>
          <Route
            path="/chat"
            element={
              <Layout>
                <Converse />
              </Layout>
            }
          />
        </Routes>
      )} */}

      <Routes>
        <Route
          path="/chat"
          element={
            <Layout>
              <Converse />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
