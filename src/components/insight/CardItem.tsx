import { FC } from "react";
import { InsightDataType } from "../../service/redux/insightReducer";

type Props = {
  data: InsightDataType;
};

const CardItem: FC<Props> = ({ data }) => {
  return (
    <div className="insight-card">
      <img src="https://avatars.githubusercontent.com/u/78205495?v=4" />
      <div className="right">
        <p className="title">{data.value}</p>
        <p className="subtitle">
          {data.item
            .split("_")
            .map((x: any) => x[0].toUpperCase() + x.slice(1))
            .join(" ")}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
