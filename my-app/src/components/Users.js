import React from "react";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
const userList = (
  <ul>
    {DUMMY_USERS.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

const Users = () => {
  return { userList };
};

export default Users;
