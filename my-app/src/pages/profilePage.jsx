import React from "react";
import Nav from "../components/nav";

function ProfilePage() {
  let token = localStorage.getItem("token");
  let profile = localStorage.getItem("user");
  let image = localStorage.getItem("image");
  let gmail = localStorage.getItem("email");
  return (
    <div className="bg-primary-100">
      <Nav />
      <div className="content">
        <img src={JSON.parse(image)} alt="" />
      </div>
    </div>
  );
}

export default ProfilePage;
