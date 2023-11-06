import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import style from "./header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoc = () => {
    navigate("/bookmark");
  };
  const handleHome = () => {
    navigate("/");
  };

  // Check if the current location matches the path for "Home" or "Bookmarks"
  const isHomeActive = location.pathname === "/";
  const isBookmarksActive = location.pathname === "/bookmark";

  return (
    <div className={style["home-body"]}>
      <div className={style["nav-bar"]}>
        <div
          onClick={handleHome}
          style={{
            cursor: "pointer",
            fontWeight: isHomeActive ? "bold" : "normal",
          }}
        >
          Home
        </div>
        <div
          onClick={handleLoc}
          style={{
            cursor: "pointer",
            fontWeight: isBookmarksActive ? "bold" : "normal",
          }}
        >
          Bookmarks
        </div>
      </div>
    </div>
  );
};

export default Header;
