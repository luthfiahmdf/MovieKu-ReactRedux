import React, { useState, useEffect } from "react";

import { Avatar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Label, TextInput, Button, Modal } from "flowbite-react";

import logo from "./assets/movieku.png";
import { BiSearchAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import "./components.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../features/LoginRegister/loginSlice";
function Nav() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);

  const [pass, setPass] = useState("");
  const [value, setValue] = useState({
    email: email,
    password: password,
  });
  const [search, setSearch] = useState([]);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const onLogin = async () => {
    dispatch(logIn(value));
    console.log({ value });
    setShow(false);
    setLogin(true);
  };

  const handleKeyPressed = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${search}`);
    }
  };
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setLogin(token);
    setLogin(true);
    const user = JSON.parse(localStorage.getItem("log"));

    setUser(user);
  }, [login]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(1);
  };

  let token = localStorage.getItem("token");
  let profile = localStorage.getItem("user");
  let image = localStorage.getItem("image");
  return (
    <div className="container bg-transparent nav">
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white cursor-pointer"
                onClick={() => navigate("/")}
              >
                Movie <span className="text-yellow-300">Ku</span>
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars">
                  <FaBars />
                </i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <form
                    action=""
                    class="relative mx-auto w-max flex items-center"
                  >
                    <input
                      type="search"
                      onKeyDown={(e) => handleKeyPressed(e)}
                      onChange={(e) => setSearch(e.target.value)}
                      class="peer cursor-pointer relative z-10 h-10 w-10 text-yellow-300  rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-yello-300 focus:pl-16 focus:pr-4"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </form>
                  {/* <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2 hover:text-yellow-300">Home</span>
                  </a> */}
                </li>

                <li className="nav-item">
                  {token && login && token.length ? (
                    <div className="user flex flex-wrap">
                      <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                        <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                        <span className="ml-2 hover:text-yellow-300 ">
                          {JSON.parse(profile)}
                        </span>
                      </a>
                      <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                        <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                        <span
                          className="ml-2 hover:text-yellow-300 "
                          onClick={handleLogout}
                        >
                          Log Out
                        </span>
                      </a>
                    </div>
                  ) : (
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span
                        className="ml-2 hover:text-yellow-300 "
                        onClick={() => setShow(true)}
                      >
                        Login
                      </span>
                    </a>
                  )}
                </li>
                <Modal
                  // show={handleShow}
                  className="modal"
                  show={show}
                  size="md"
                  popup={true}
                  onClose={() => setShow(false)}
                >
                  <Modal.Header className="bg-primary-100" />
                  <Modal.Body className="modal bg-primary-100 ">
                    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 ">
                      <h3 className="text-xl font-medium text-white">
                        Sign in to our platform
                      </h3>
                      <div className="text-white">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="email"
                            value="Your Email"
                            style={{ color: "white" }}
                          />
                        </div>
                        <TextInput
                          id="email"
                          placeholder="name@company.com"
                          required={true}
                          style={{ color: "white" }}
                          onChange={(e) =>
                            setValue({ ...value, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="text-white">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="password"
                            value="Your password"
                            style={{ color: "white" }}
                          />
                        </div>
                        <TextInput
                          id="password"
                          type="password"
                          required={true}
                          style={{ color: "white" }}
                          onChange={(e) =>
                            setValue({ ...value, password: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full">
                        <Button color="warning" onClick={onLogin}>
                          Log in to your account
                        </Button>
                      </div>
                      <div className="w-full"></div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{" "}
                        <a
                          href="/modal"
                          className="text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Create account
                        </a>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Nav;
