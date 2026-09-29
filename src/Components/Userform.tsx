import React, { useState } from "react";
import { addUser } from "../Services/UserService";
import { useNavigate } from "react-router";

const Userform = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      age,
      email,
    };

    try {
      const data = await addUser(newUser);

      console.log("User added:", data);

      setFirstName("");
      setLastName("");
      setAge(Number);
      setEmail("");
    } catch (error) {
      console.log("Error adding user:", error);
    }
    navigate("/");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
 <br /><br />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
 <br /><br />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
<br /><br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Add User</button>
    </form>
  );
};

export default Userform;