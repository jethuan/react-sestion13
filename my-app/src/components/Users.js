import React, { useState } from "react";
// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];
import UserFinder from "./UserFinder";

const Users = (props) => {
  const [showUser, setShowUser] = useState(true);
  const toggleUserHandle = () => {
    setShowUser((curState) => !curState);
  };

  const usersList = (
    <ul>
      {props.users.map((user) => (
        <li key={user.id} name={user.name}>
          {user.name}{" "}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <button onClick={toggleUserHandle}>
        {showUser ? "Hide" : "Show"} Users{" "}
      </button>
      {showUser && usersList}
    </div>
  );
};

export default Users;
