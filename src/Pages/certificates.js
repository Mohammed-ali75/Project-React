import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const certificates = () => {
  const style1 = ({ isActive }) => {
    return {
      color: isActive ? "#9aa3ff" : "#fff",
      fontSize: isActive ? "32px" : "28px",
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
      background: isActive
        ? "linear-gradient(to right,rgba(94, 111, 163, 0.7),rgba(179, 183, 226, 0.7))"
        : "none",
    };
  };
  return (
    <>
      <div className="divCertificates" id="Projects">
        <h2 className="h2Certificates">Projects</h2>
        <p className="pCertificates">
          my name is Mohammed, I live in the pyramid gardens, this is my 1st
          project in react dev.
        </p>
        <div className="divDivCertificates">
          <NavLink style={style1} to="/Project_React">
            1st Section
          </NavLink>
          <NavLink className="colCertificates" style={style1} to="2nd-Section">
            2nd Section
          </NavLink>
          <NavLink style={style1} to="3rd-Section">
            3rd Section
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default certificates;
