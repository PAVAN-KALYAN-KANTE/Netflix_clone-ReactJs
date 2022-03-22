import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Nav.module.css";
import cx from "classnames";

function Nav() {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const transitionNavbar = () => {
    if (window.screenY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  });

  return (
    <div className={cx(classes.nav, `${show && classes.nav_black}`)}>
      <div className={classes.nav_contents}>
        <img
          className={classes.nav_logo}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className={classes.nav_avatar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Nav;
