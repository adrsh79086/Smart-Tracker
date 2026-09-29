import React from "react";
import Userform from "./Userform";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/add-user");
  };
  return (
    <div className="navbar">
      <h1>User Management</h1>

      <button className="add-user-btn" onClick={handleAddUser}>
        + Add User
      </button>
    </div>
  );
};

export default Navbar;