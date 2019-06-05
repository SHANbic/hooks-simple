import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = () => {
  const [resource, setResource] = useState([]);

  /* async componentDidMount() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );
    this.setState({ resources: response.data });
  } */

  return <div>{resource.length}</div>;
};

export default ResourceList;
