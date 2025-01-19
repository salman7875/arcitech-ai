import QueryChart from "../feature/query-chart/QueryChart";
import RatingChart from "../feature/rating-chart/RatingChart";
import AverageTimeChart from "../feature/avg-time-chart/AverageTimeChart";
import DistributionChart from "../feature/distribution-chart/DistributionChart";
import Siderbar from "../components/sidebar/Siderbar";
import Header from "../components/header/Header";
import Insight from "../feature/insight/Insight";

const Main = () => {
  return (
    <main className="main">
      <section className="main-wrapper">
        <Siderbar />
        <main className="container">
          <Header />

          <div className="top-section">
            <Insight />
          </div>

          <div className="middle-section">
            <QueryChart />
            <RatingChart />
            <AverageTimeChart />
            <DistributionChart />
          </div>
        </main>
      </section>
    </main>
  );
};

export default Main;
