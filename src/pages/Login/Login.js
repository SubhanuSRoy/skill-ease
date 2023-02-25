import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import SE_Logo from "../../assets/images/SkillEase_logo.png";
import { authActions } from "../../features/auth/auth-slice";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)

  const navigate = useNavigate()
  const loginUser = () => {
    dispatch(authActions.login)
    navigate("/chat")
  };
  return (
    <div className="relative h-screen flex flex-col items-center justify-center gap-8 pt-4 bg-dark">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-sm w-full text-gray-100 bg-transparent py-4 px-8 rounded-lg border-2 border-gray-100">
          <div className="text-center">
            <img src={SE_Logo} width={150} className="mx-auto" />

            <div className="mt-5 space-y-2">
              <h3 className="text-gray-50 text-2xl font-bold sm:text-3xl">
                Login to <span className="text-primary">SkillEase</span>
              </h3>
            </div>
          </div>
          <form onSubmit={loginUser} className="mt-8 space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-100 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                placeholder="Must have 8 characters"
                className="w-full mt-2 px-3 py-2 text-gray-100 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-primary active:bg-primary rounded-lg duration-150">
              Sign in
            </button>
            <div className="text-center">
              <p className="">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary hover:text-primary"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
