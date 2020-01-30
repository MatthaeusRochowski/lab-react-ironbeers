import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <Link to={`/`}>
      <header>
        <img src="../images/header.png" alt='header'/>
      </header>
    </Link>
  </div>
);
