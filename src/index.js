import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  //Great place to do initial data loading... Fetch and requests etc go here.
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonsDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request." />;
  }

  render() {
    return <div className="border red">{this.rederContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
