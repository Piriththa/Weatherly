function About() {
  return (
    <div className="page about-page">
      <div className="page-card about-card">
        <h1>About</h1>
        <p className="subtitle">
          Simple, fast and reliable weather application
        </p>

        <p className="about-text">
          <strong>Weatherly</strong> helps you check real-time weather conditions
          and accurate forecasts for cities around the world.
        </p>

        <div className="about-features">
          <div className="about-feature">
            <div className="icon">🌤</div>
            <div className="about-feature-content">
              <h4>Live Weather</h4>
              <p>Real-time temperature and current weather conditions.</p>
            </div>
          </div>

          <div className="about-feature">
            <div className="icon">📅</div>
            <div className="about-feature-content">
              <h4>5-Day Forecast</h4>
              <p>Accurate weather predictions to plan ahead.</p>
            </div>
          </div>

          <div className="about-feature">
            <div className="icon">⚡</div>
            <div className="about-feature-content">
              <h4>Fast & Simple</h4>
              <p>Clean UI with smooth navigation and quick results.</p>
            </div>
          </div>
        </div>

        <p className="powered">
          Powered by <strong>OpenWeather</strong>
        </p>
      </div>
    </div>
  );
}

export default About;