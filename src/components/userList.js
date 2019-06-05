import React from "react";
import useResources from "./useResources";

const UserList = () => {
  const users = useResources("users");

  return (
    <ul className="ui bulleted list">
      {users.map(user => {
        return (
          <li className="item" key={user.id}>
            {user.name}
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
