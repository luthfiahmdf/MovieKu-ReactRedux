import React from "react";
import "../App.css";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitter,
} from "react-icons/bs";
import logo from "./assets/logo.png";
import logobrand from "./assets/movieku.png";
import { useNavigate } from "react-router-dom";
import App from "../App";

function Foot() {
  const navigate = useNavigate();
  return (
    <Footer container={true}>
      <Footer.Copyright href="#" by="Luthfi™" year={2022} />
      <Footer.LinkGroup className="gap-x-2">
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default Foot;
