import React from "react";
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends React.Component {
  state = {
    temperature: "",
  };

  onTempChange = (e) => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    const { temperature } = this.state;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in Celsius</legend>
          <input type="text" value={temperature} onChange={this.onTempChange} />
        </fieldset>
        <BoilingVerdict celcius={parseFloat(temperature)} />
      </div>
    );
  }
}
export default Calculator;
