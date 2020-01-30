import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";


export default class BeerDetails extends Component {
  constructor(props) {
    console.log("BeerDetails --> constructor()");
    super(props);

    this.state = {
      params: this.props.match.params,
      singleBeer: []
    };

    //console.log("BeerDetails --> params", this.state.params.beerId);
  }

  componentDidMount() {
    console.log("BeerDetails --> componentDidMount()");
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.state.params.beerId}`
      )
      .then(response => {
        console.log("BeerDetails --> Promise resolved");
        this.setState({ singleBeer: response.data });
      });
  }

  render() {
    const singleBeer = this.state.singleBeer;

    return (
      <div>
      <Header />
      <Link to="/beers">Back</Link>
        <div className="col-7">
          <img
            src={singleBeer.image_url}
            alt="beer"
            style={{ width: "20%" }}
          ></img>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>{singleBeer.name}</td>
              </tr>
              <tr>
                <td>{singleBeer.tagline}</td>
              </tr>
              <tr>
                <td>{singleBeer.first_brewed}</td>
              </tr>
              <tr>
                <td>{singleBeer.attenuation_level}</td>
              </tr>
              <tr>
                <td>{singleBeer.description}</td>
              </tr>
              <tr>
                <td>{singleBeer.contributed_by}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
