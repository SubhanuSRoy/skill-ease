import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth/auth-slice";
import SE_Logo from "../../assets/images/SkillEase_logo.png";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);
  const userType = useSelector((state) => state.auth.userType);
  const navigate = useNavigate()
  const logoutAccount = () => {
    dispatch(authActions.logout);
    navigate("/")
  };
  return (
    <div className="bg-dark h-full">
      <header aria-label="Site Header" class="bg-midnight">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex-1 md:flex md:items-center md:gap-12">
              <div class="block text-primary">
                <span class="sr-only">SkillEase</span>
                <img src={SE_Logo} width={150} className="mx-auto" />
              </div>
            </div>

            <div class="md:flex md:items-center md:gap-12">
              {/* <nav aria-label="Site Nav" class="hidden md:block">
                <ul class="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      History
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav> */}

              <div class="flex items-center gap-4">
                <h1 className="text-gray-50 text-lg">{userName}</h1>
                <h2 className="text-primary text-lg ">{userType}</h2>
                <div class="sm:flex sm:gap-4">
                  <button
                    class="rounded-md bg-transparent border-2 border-gray-500 px-5 py-2.5 text-sm font-medium text-gray-200 shadow flex items-center gap-2"
                    onClick={logoutAccount}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                    Logout
                  </button>
                </div>

                {/* <div class="block md:hidden">
                  <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}

export default Layout;
