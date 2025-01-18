import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Header from "./components/header/Header";
import Insight from "./components/insight/Insight";
import Siderbar from "./components/sidebar/Siderbar";

const data = [
  { name: "small_talk", query: 300 },
  { name: "sales_inquiries", query: 350 },
  { name: "technical_support", query: 450 },
  { name: "customer_service", query: 400 },
];

const lineData = {
  day_wise: [
    { date: "2023-05-01", average_time: 0.4 },
    { date: "2023-05-02", average_time: 0.42 },
    { date: "2023-05-03", average_time: 0.35 },
    { date: "2023-05-04", average_time: 0.5 },
    { date: "2023-05-05", average_time: 0.47 },
  ],
  week_wise: [
    { week: "18", average_time: 0.45 },
    { week: "19", average_time: 0.43 },
    { week: "20", average_time: 0.5 },
    { week: "21", average_time: 0.46 },
    { week: "22", average_time: 0.41 },
  ],
};

const ratingData = [
  { rating: 1, count: 15 },
  { rating: 2, count: 35 },
  { rating: 3, count: 200 },
  { rating: 4, count: 500 },
  { rating: 5, count: 600 },
];

const usageData = {
  by_platform: [
    { name: "iOS", value: 800 },
    { name: "Android", value: 700 },
    { name: "Web", value: 200 },
  ],
  by_country: [
    { name: "USA", value: 800 },
    { name: "India", value: 250 },
    { name: "Germany", value: 200 },
    { name: "Japan", value: 200 },
    { name: "Brazil", value: 200 },
  ],
};

const formattedData = ratingData.map((d) => ({
  ...d,
  rating: `rating ${d.rating}`,
}));

const App = () => {
  return (
    <main className="main">
      <section className="main-wrapper">
        <Siderbar />
        <main className="container">
          <Header />

          <div className="top-section">
            <Insight />
            <div className="r"></div>
          </div>

          <div className="middle-section">
            <div className="bar-container">
              <ResponsiveContainer>
                <BarChart
                  className="bar"
                  margin={{ top: 20, right: 20, bottom: 20 }}
                  data={data}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="query" name="Queries Per Category" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="pie-container">
              <ResponsiveContainer>
                <PieChart className="pie">
                  <Pie
                    dataKey="count"
                    nameKey="rating"
                    isAnimationActive={false}
                    data={formattedData}
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
            </div>

            <div className="line-container">
              <button>Show Weekly Result</button>
              <ResponsiveContainer>
                <LineChart
                  className="line"
                  margin={{ top: 20, right: 250, bottom: 10 }}
                  data={lineData.day_wise}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Response Time"
                    stroke="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="area-container">
              <button>Distribution by Country</button>
              <ResponsiveContainer>
                <AreaChart
                  className="area"
                  margin={{ top: 20, right: 250, bottom: 20 }}
                  data={usageData.by_country}
                >
                  <XAxis dataKey="name" />
                  <YAxis name="erwhiwer" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="value"
                    name="Distribution"
                    stroke="#8884d8"
                    fillOpacity={0.3}
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </section>
    </main>
  );
};

export default App;
