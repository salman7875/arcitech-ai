import { FC } from "react";
import "./header.scss";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../service/redux/reducer";
import { ACTIONS } from "../../types";
import { DistributionType } from "../../service/redux/distributionReducer";
import { ResponseTimeType } from "../../service/redux/responseTimeReducer";

const Header: FC = () => {
  const dispatch: any = useDispatch();
  const { isActive: resActive } = useSelector(
    (state: RootState) => state.responseTime
  ) as ResponseTimeType;
  const { isActive: distActive } = useSelector(
    (state: RootState) => state.distribution
  ) as DistributionType;

  const resType = resActive === "day" ? "week" : "day";
  const distType = distActive === "platform" ? "country" : "platform";

  const handleFilter = (type: "res" | "dist") => {
    if (type === "res") {
      dispatch({
        type: ACTIONS.RESPONSE_TIME.TOGGLE,
        payload: resType,
      });
    } else {
      dispatch({
        type: ACTIONS.DISTRIBUTION.TOGGLE,
        payload: distType,
      });
    }
  };

  return (
    <header className="header">
      <div className="wrapper">
        <h2 className="title">Dashboard</h2>

        <div className="header-wrapper">
          <div className="input-container">
            <MagnifyingGlassIcon height={18} />
            <input type="text" placeholder="Search here..." />
          </div>

          <button onClick={() => handleFilter("res")}>Show {resType}</button>
          <button onClick={() => handleFilter("dist")}>Show {distType}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
