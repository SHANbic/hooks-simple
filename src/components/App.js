import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./userList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div className="ui container">
      <UserList />
      <div>
        <button className="ui button" onClick={() => setResource("posts")}>
          Posts
        </button>
        <button className="ui button" onClick={() => setResource("todos")}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
