import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout}) => {
  let greeting;

  if (currentUser) {
    greeting = (
    <>
      <h1>Welcome {currentUser.username}</h1>
      <button onClick={logout}>Sign Out</button>
    </>
    )
  } else {
    greeting = (
      <>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </>
    )
  }

  return (
    greeting
  )
}

export default Greeting;