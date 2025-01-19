import { FC, useEffect } from "react";

import ChartBar from "../../components/Charts/ChartBar";
import { useDispatch, useSelector } from "react-redux";
import { fetcher } from "../../service/api/request";
import { RootState } from "../../service/redux/reducer";
import "./query-chart.scss";
import { CategoryType } from "../../service/redux/categoryReducer";

const QueryChart: FC = () => {
  const dispatch: any = useDispatch();
  const {
    data: catData,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.category) as CategoryType;

  useEffect(() => {
    dispatch(fetcher("category_distribution", "CATEGORIES"));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={`bar-container ${isLoading && "loading"}`}>
      {catData && Array.isArray(catData) && <ChartBar data={catData} />}
    </div>
  );
};

export default QueryChart;
