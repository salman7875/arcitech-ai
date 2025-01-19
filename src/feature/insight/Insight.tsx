import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { RootState } from "../../service/redux/reducer";
import { fetcher } from "../../service/api/request";
import CardItem from "../../components/insight/CardItem";
import { InsightDataType, InsightType } from "../../service/redux/insightReducer";
import "./insight.scss";

const Insight = () => {
  const dispatch: any = useDispatch();
  const { data, error, isLoading } = useSelector(
    (state: RootState) => state.insight
  ) as InsightType;

  useEffect(() => {
    dispatch(fetcher("insight_summary", "INSIGHT"));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="insight">
      <div className="insight-header">
        <h3>Insights</h3>
        <p>Arcitech.ai summary</p>
      </div>
      <div className={`insight-body ${isLoading && "loading"}`}>
        {data &&
          Array.isArray(data) &&
          data.map((d: InsightDataType, idx) => {
            return <CardItem data={d} key={idx} />;
          })}
      </div>
    </section>
  );
};

export default Insight;
