import React from "react";
import error from "../../assets/img/error-2129569_1280.jpg";
import "./NotFound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate=useNavigate()
  return (
    <div className="error">
      <img
        src={error}
        alt=""
        style={{
          width: "500px",
          borderRadius: "50px",
          boxShadow: "2px 2px 2px  15px cadetblue",
          margin: "2rem",
        }}
      />
      <h3>Page can't found!</h3>
      <button onClick={()=>navigate("/")}>Home</button>
    </div>
  );
};

export default NotFound;
