import React from "react";

const imgStyle = {
    width: '30%'
};

export default () => (
  <div>
    <nav class="navbar navbar-dark bg-primary mb-3">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src='./images/home.jfif' style={imgStyle}></img>
        </a>
      </div>
    </nav>
  </div>
);
