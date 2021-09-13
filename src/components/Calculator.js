import React from "react";
// import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
        {/* <BoilingVerdict celcius={parseFloat(temperature)} /> */}
      </div>
    );
  }
}
export default Calculator;
