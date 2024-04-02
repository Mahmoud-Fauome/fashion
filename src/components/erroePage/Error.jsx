import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigat = useNavigate();
  const back = () => {
    navigat("/");
  };

  return (
    <div style={{ padding: "9em" }} className="text-center text-danger">
      <h6 className="mb-4">Error Page || 404</h6>
      <Button onClick={back}>back to home</Button>
    </div>
  );
};
export default Error;
