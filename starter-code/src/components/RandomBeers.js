import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

export default class RandomBeers extends Component {
  state = {
    randomBeer: ""
  };

  componentDidMount() {
    console.log("RandomBeers --> componentDidMount()");
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(response => {
        console.log("RandomBeers --> Promise resolved");
        this.setState({ randomBeer: response.data });
      });
  }

  render() {
    console.log("RandomBeers ---> RandomBeers rendered");
    const randomBeer = this.state.randomBeer;

    return (
      <div>
        <Header />
        <img src="../images/random-beer.png" alt="random-beer"></img>
        <div className="col-7">
          <img
            src={randomBeer.image_url}
            alt="beer"
            style={{ width: "20%" }}
          ></img>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>{randomBeer.name}</td>
              </tr>
              <tr>
                <td>{randomBeer.tagline}</td>
              </tr>
              <tr>
                <td>{randomBeer.first_brewed}</td>
              </tr>
              <tr>
                <td>{randomBeer.attenuation_level}</td>
              </tr>
              <tr>
                <td>{randomBeer.description}</td>
              </tr>
              <tr>
                <td>{randomBeer.contributed_by}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
