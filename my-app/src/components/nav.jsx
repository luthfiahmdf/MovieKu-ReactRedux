import React from "react";
import { Navbar } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import logo from "./assets/movieku.png";
import "./components.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  return (
    <div className="container bg-primary-100">
      <Navbar fluid={true} rounded={true} className="mx-9">
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white">
            Flowbite
          </span> */}
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                // img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="nav">
          <Navbar.Link
            href="/"
            style={{
              color: "white",
            }}
            className="hover:text-yellow-300"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/search"
            style={{
              color: "white",
            }}
            className="hover:text-yellow-300 text-yellow-300"
          >
            Search
          </Navbar.Link>
          <Navbar.Link
            href="/navbars"
            style={{
              color: "white",
            }}
            className="hover:text-yellow-300"
          >
            Category
          </Navbar.Link>
          {/* <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav;
