import { FC } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CategoryDataType } from "../../service/redux/categoryReducer";

type Props = {
  data: CategoryDataType[];
};

const ChartBar: FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart
        className="bar"
        margin={{ top: 20, right: 20, bottom: 20 }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="item" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" name="Queries Per Category" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartBar;
