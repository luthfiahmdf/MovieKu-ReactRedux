import { Button } from "flowbite-react";
import Swal from "sweetalert2";
import React from "react";
import Nav from "../components/nav";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to Log Out?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Log Out Succes!", "", "success");
        navigate("/");
        setTimeout(function () {
          window.location.reload(1);
        }, 2000);
        localStorage.clear();
      } else if (result.isDenied) {
        Swal.fire("Gajadi", "", "info");
      }
    });
  };
  let token = localStorage.getItem("token");
  let profile = localStorage.getItem("user");
  let image = localStorage.getItem("image");
  let gmail = localStorage.getItem("email");
  return (
    <div className="bg-primary-100">
      <Nav />
      <div className="container h-screen">
        <div className="content flex justify-center items-center flex-col">
          <div className="image mt-20 ">
            <img src={JSON.parse(image)} alt="" className="w-20" />
            <h3 className="text-white text-center">{JSON.parse(profile)}</h3>
          </div>
          <div className="Logout mt-2">
            <Button color="warning" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
