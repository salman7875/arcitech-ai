import { FC, useEffect } from "react";

import ChartLine from "../../components/Charts/ChartLine";
import { useDispatch, useSelector } from "react-redux";
import { fetcher } from "../../service/api/request";
import { RootState } from "../../service/redux/reducer";
import "./average-time-chart.scss";
import { ResponseTimeType } from "../../service/redux/responseTimeReducer";

const AverageTimeChart: FC = () => {
  const dispatch: any = useDispatch();
  const { data, isLoading, error, isActive } = useSelector(
    (state: RootState) => state.responseTime
  ) as ResponseTimeType;

  useEffect(() => {
    dispatch(fetcher("response_times", "RESPONSE_TIME"));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={`line-container ${isLoading && "loading"}`}>
      {data && (
        <ChartLine data={isActive === "day" ? data.day_wise : data.week_wise} />
      )}
    </div>
  );
};

export default AverageTimeChart;
