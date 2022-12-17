import React from "react";
import { PieChart, Pie, Sector, Cell, Legend } from "recharts";

const data = [
  { name: "Carbondioxide", value: 400 },
  { name: "Methane", value: 300 },
  { name: "Nitrogen", value: 300 },
];
const COLORS = ["#808080", "#0000FF", "#ADD8E6"];

export default function TotalReportPie() {
  return (
    <PieChart width={500} height={400}>
      <Pie
        data={data}
        cx={250}
        // cy={250}
        innerRadius={50}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={15}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
}
