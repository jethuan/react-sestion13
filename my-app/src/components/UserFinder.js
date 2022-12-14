import React, { useEffect, useState } from "react";

import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandle = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={searchChangeHandle} />
      <Users users={filteredUsers} />
    </div>
  );
};
export default UserFinder;
