import { FC, useEffect } from "react";

import ChartArea from "../../components/Charts/ChartArea";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../service/redux/reducer";
import { fetcher } from "../../service/api/request";
import "./distribution-chart.scss";
import { DistributionType } from "../../service/redux/distributionReducer";

const DistributionChart: FC = () => {
  const dispatch: any = useDispatch();
  const { data, isLoading, error, isActive } = useSelector(
    (state: RootState) => state.distribution
  ) as DistributionType;

  useEffect(() => {
    dispatch(fetcher("usage_statistics", "DISTRIBUTION"));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={`area-container ${isLoading && "loading"}`}>
      {data && (
        <ChartArea
          data={isActive === "platform" ? data.by_platform : data.by_country}
        />
      )}
    </div>
  );
};

export default DistributionChart;
