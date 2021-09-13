import React from "react";

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};
class TemperatureInput extends React.Component {
  state = {
    temperature: "",
  };

  onTempChange = (e) => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    const { temperature } = this.state;
    const { scale } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleName[scale]}</legend>
          <input type="text" value={temperature} onChange={this.onTempChange} />
        </fieldset>
      </div>
    );
  }
}
export default TemperatureInput;
