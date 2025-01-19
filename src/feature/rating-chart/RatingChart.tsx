import { FC, useEffect } from "react";
import ChartPie from "../../components/Charts/ChartPie";
import "./rating-chart.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../service/redux/reducer";
import { fetcher } from "../../service/api/request";
import { UserSatisfactionType } from "../../service/redux/userSatisfactionReducer";

const RatingChart: FC = () => {
  const dispatch: any = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.userSatisfaction
  ) as UserSatisfactionType;

  useEffect(() => {
    dispatch(fetcher("user_satisfaction", "USER_SATISFACTION"));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={`pie-container ${isLoading && "loading"}`}>
      {data && Array.isArray(data) && <ChartPie data={data} />}
    </div>
  );
};

export default RatingChart;
