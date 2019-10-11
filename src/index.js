import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  //Great place to do initial data loading... Fetch and requests etc go here.
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div> Lattitude: {this.state.lat}</div>;
    }

    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
