import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Services/UserService";
import type { User } from "../types/user";

const EditUserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");

console.log("URL ID:", id);
  console.log("Saved Users:", savedUsers);
    if (!savedUsers || !id) {
      return;
    }

    const users: User[] = JSON.parse(savedUsers);

    const user = users.find(
      (user) => user.id === Number(id)
    );

    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setAge(user.age);
      setEmail(user.email);
    }
  }, [id]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (age === "" || !id) {
      return;
    }

    const updatedUser = {
      firstName,
      lastName,
      age,
      email,
    };

    try {
      await updateUser(Number(id), updatedUser);

      navigate("/");
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Edit User</h2>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) =>
          setAge(
            e.target.value === ""
              ? ""
              : Number(e.target.value)
          )
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUserForm;