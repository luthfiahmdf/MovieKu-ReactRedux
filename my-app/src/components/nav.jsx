import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import logo from "./assets/movieku.png";
import { BiSearchAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import "./components.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
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
                  <form action="" class="relative mx-auto w-max">
                    <input
                      type="search"
                      class="peer cursor-pointer relative z-10 h-10 w-10 text-yellow-300 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-yello-300 focus:pl-16 focus:pr-4"
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
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2 hover:text-yellow-300">Test</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2 hover:text-yellow-300">Tes</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Nav;
