/** @format */

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spiner from "./spiner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" }; // new way to inistilize tha state --consrtuctor it equivilent to the same as constructor
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.errorMessage })
    );
  }
  componentDidUpdate() {
    console.log("did update");
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spiner message='Please accept the location request.' />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
