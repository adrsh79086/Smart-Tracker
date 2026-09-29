import React, { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../Services/UserService";
import UserCard from "./UserCard";
import type { User } from "../types/user";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
  try {
    await deleteUser(id);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== id)
    );
  } catch (error) {
    console.log("Error deleting user:", error);
  }
};

  return (
        <>
  <div className="product-count">
  <h3>Total Products</h3>
  <h1>{users.length}</h1>
</div>
    <UserCard
      user={users}
      onDelete={handleDelete}
    />
    </>
  );
};

export default UserList;