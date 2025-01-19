import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FC } from "react";

type Props = {
  data: { item: string; value: number }[];
};

const ChartArea: FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        margin={{ top: 20, right: 20, bottom: 10 }}
        className="area"
        data={data}
      >
        <XAxis dataKey="item" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="value"
          name="Distribution"
          stroke="#8884d8"
          fillOpacity={0.3}
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartArea;
