import React, { FC } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  data: { item: string; value: number }[];
};

const ChartLine: FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%">
      <LineChart
        className="line"
        margin={{ top: 20, right: 20, bottom: 10 }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="item" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          name="Average Time"
          stroke="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartLine;
