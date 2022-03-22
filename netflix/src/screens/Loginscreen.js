import React, { useState } from "react";
import classes from "./Loginscreen.module.css";
import SignInScreen from "./SignInScreen";

function Loginscreen() {
  const [sigin, setsignin] = useState(false);
  return (
    <div className={classes.loginScreen}>
      <div className={classes.loginScreen_background}>
        <img
          className={classes.loginScreen_logo}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          onClick={() => setsignin(true)}
          className={classes.loginScreen_button}
        >
          Sign In
        </button>
        <div className={classes.loginScreen_gradient} />
      </div>
      <div className={classes.loginScreen_body}>
        {sigin ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className={classes.loginScreen_input}>
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setsignin(true)}
                  className={classes.loginScreen_GetstartedButton}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Loginscreen;
