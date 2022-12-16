import React from "react";
import { useNavigate } from "react-router-dom";

const about = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
};

export default about;
