import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";


export default class Beers extends Component {
  constructor() {
    console.log("App --> constructor()");
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    console.log("App --> componentDidMount()");
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      console.log("App --> Promise resolved");
      this.setState({ beers: response.data });
    });
  }

  render() {
    console.log("Beers ---> Beers rendered");

    const beers = this.state.beers;

    return (
      <div>
        <Header />
        <img src="../images/beers.png" alt="beers"></img>
     
        <table className="table">
          <thead></thead>
          <tbody>
            {beers.map(beer => {
              return (
                <tr key={beer._id}>
                  <td>
                  <Link to={`/beers/${beer._id}`}><img src={beer.image_url} alt='beer' style={{ width: "30%" }}/></Link>
                  </td>
                  <td>
                      <h3>{beer.name}</h3>
                      <h4>{beer.tagline}</h4>
                      <p>{beer.contributed_by}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
