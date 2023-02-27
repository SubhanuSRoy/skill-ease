import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Conversation from "./pages/Seeker/Recommend";

import Converse from "./pages/Seeker/Converse";
import Course from "./pages/Seeker/Course";
import JobsList from "./pages/Seeker/JobsList";
import Recommend from "./pages/Seeker/Recommend";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userType = useSelector((state) => state.auth.userType);

  return (
    <div>
      {!isLoggedIn && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
      {isLoggedIn && userType == "Seeker" && (
        <Routes>
          <Route
            path="/chat"
            element={
              <Layout>
                <Converse />
              </Layout>
            }
          />
          <Route
            path="/recommend"
            element={
              <Layout>
                <Recommend />
              </Layout>
            }
          />
        </Routes>
      )}
      {isLoggedIn && userType == "Contributor" && (
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
        </Routes>
      )}
      
      {/* <Routes>
        <Route
          path="/chat"
          element={
            <Layout>
              <Converse />
            </Layout>
          }
        />
        <Route
          path="/chatt"
          element={
            <Layout>
              <Conversation />
            </Layout>
          }
        />
         
        <Route
          path="/jobs"
          element={
            <Layout>
              <JobsList />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/course"
          element={
            <Layout>
              <Course />
            </Layout>
          }
        />
        
      </Routes> */}
    </div>
  );
}

export default App;
