import React from "react";

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};
function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  return (
    <div>
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}</legend>
        <input
          type="text"
          value={temperature}
          onChange={(e) => onTemperatureChange(e, scale)}
        />
      </fieldset>
    </div>
  );
}
export default TemperatureInput;
