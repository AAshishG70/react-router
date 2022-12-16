import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  }, []);
  return (
    <h1>
      404 Not Found
      <br />
      You're going to Homepage.
    </h1>
  );
};

export default ErrorPage;
