import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: 40 };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ late: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  render() {
    return <div> Latitude: {this.state.late}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
