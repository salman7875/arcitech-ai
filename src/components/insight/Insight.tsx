import "./insight.scss";

const data = {
  total_queries: 1500,
  successful_queries: 1350,
  failed_queries: 150,
  average_response_time: 0.45,
};

const Insight = () => {
  return (
    <section className="insight">
      <div className="insight-header">
        <h3>Insights</h3>
        <p>Arcitech.ai summary</p>
      </div>
      <div className="insight-body">
        {Object.entries(data).map((d) => {
          return (
            <div className="insight-card">
              <img
                src="https://avatars.githubusercontent.com/u/78205495?v=4"
                alt=""
                height={20}
                width={20}
                className="left"
              />
              <div className="right">
                <p className="title">{d[1]}</p>
                <p className="subtitle">
                  {d[0]
                    .split("_")
                    .map((x) => x[0].toUpperCase() + x.slice(1))
                    .join(" ")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Insight;
