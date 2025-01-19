import { FC } from "react";
import { Line, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { UserSatisfactionDataType } from "../../service/redux/userSatisfactionReducer";

type Props = {
  data: UserSatisfactionDataType[];
};

const ChartPie: FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%">
      <PieChart className="pie">
        <Pie
          dataKey="count"
          nameKey="rating"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        />
        <Line name="pweihoewh" />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ChartPie;
