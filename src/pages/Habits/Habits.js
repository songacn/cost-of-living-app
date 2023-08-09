import "./Habits.scss";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  pieHole: 0.4,
  legend: { position: "none" },
  colors: ["#671FAF", "#96DFFF", "#FFD526", "#D60000", "#D9FFD9"],
  is3D: false,
  chartArea: {
    left: 50,
    top: 50,
    right: 50,
    bottom: 50,
  },
};

const Habits = () => {
  return (
    <div>
      <h1 className="habits-heading">Reports</h1>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        margin="0px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Habits;
