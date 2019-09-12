import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="jumbotron">
    <h1>Welcome to Good Day Bank </h1>
    <p>start to open an account with us</p>
    <Link className="btn btn-primary btn-lg" to="create">
      Open Account
    </Link>
  </div>
);

export default Home;
