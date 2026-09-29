import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Userform from "./Components/Userform";
import EditUserForm from "./Components/EditUserForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-user" element={<Userform />} />
        <Route path="/edit-user/:id" element={<EditUserForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;