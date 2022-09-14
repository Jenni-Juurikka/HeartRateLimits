import React from "react";
import {useState} from "react";

export default function App() {
  const [age, setAge] = useState(0);
  const maxLimit = 220;
  const [upperRate, setUpperRate] = useState(0);
  const [lowerRate, setLowerRate] = useState(0);

  function CalculateHeartRate(e) {
    e.preventDefault();
    setUpperRate((maxLimit - age) * 0.85);
    setLowerRate((maxLimit - age) * 0.65);
  }

  return (
    <div>
      <h1>Heart Rate Limits</h1>
      <form onSubmit={CalculateHeartRate}>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>

        <input type="submit" value="Submit"/>
      </form>

      <div>
        <h4>Upper limit: {upperRate}</h4>
        <h4>Lower limit: {lowerRate}</h4>
      </div>
    </div>
  );
}