import React from "react";
import Nav from "../components/nav";
import "../components/components.css";
import { TextInput } from "flowbite-react";
import { BiSearchAlt } from "react-icons/bi";
function Search() {
  return (
    <div className="bg-primary-100">
      <Nav />
      <div className="seacrh mx-9 text-white ">
        <TextInput
          type="text"
          className="search_bar text-white"
          placeholder="Search Movies"
          required={true}
          icon={BiSearchAlt}
        />
      </div>
    </div>
  );
}

export default Search;
