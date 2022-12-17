import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    Carbondioxide: 4000,
    Methane: 2400,
    Nitrogen: 2400,
  },
  {
    name: "Tue",
    Carbondioxide: 3000,
    Methane: 1398,
    Nitrogen: 2210,
  },
  {
    name: "Wed",
    Carbondioxide: 2000,
    Methane: 9800,
    Nitrogen: 2290,
  },
  {
    name: "Thurs",
    Carbondioxide: 2780,
    Methane: 3908,
    Nitrogen: 2000,
  },
  {
    name: "Fri",
    Carbondioxide: 1890,
    Methane: 4800,
    Nitrogen: 2181,
  },
  {
    name: "Sat",
    Carbondioxide: 2390,
    Methane: 3800,
    Nitrogen: 2500,
  },
  {
    name: "Sun",
    Carbondioxide: 3490,
    Methane: 4300,
    Nitrogen: 2100,
  },
];

export default function EmmissionChart() {
  return (
    <BarChart
      width={500}
      height={450}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 2,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar barSize={30} dataKey="Carbondioxide" stackId="a" fill="#FEBD38" />
      <Bar dataKey="Methane" stackId="a" fill="#FE464B" />
      <Bar dataKey="Nitrogen" stackId="a" fill="#A08CFB" />
    </BarChart>
  );
}
