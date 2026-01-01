import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Home() {
  // Store the city name entered by the user
  const [city, setCity] = useState("");

  // Get weather-related data and functions from global context
  const {
    weatherData,
    forecastData,
    fetchWeather,
    loading,
    error,
  } = useContext(WeatherContext);

  // Trigger weather fetch when user clicks search
  const handleSearch = () => {
    const trimmedCity = city.trim();

    // Prevent unnecessary API calls for very short input
    if (trimmedCity.length < 2) return;

    fetchWeather(trimmedCity);
  };

  // Allow search using Enter key for better UX
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="weather-page">
      <div className="weather-card">

        {/* Application title */}
        <h2 className="title">🌤️ Weatherly</h2>

        {/* Live weather status indicator */}
        <div className="live-chip">
          <span className="live-dot">● Live Weather</span>
          <span className="open-weather"> OpenWeather</span>
        </div>

        {/* Short description for users */}
        <p className="tagline">Simple and accurate weather updates</p>

        {/* Decorative hero icon – visible only before search */}
        {!weatherData && (
          <div className="hero-weather">☁️</div>
        )}

        {/* Search input and button container */}
        <div className="search-box">
          {/* City input field */}
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyPress}
            className="city-input"
          />

          {/* Search button */}
          <button
            onClick={handleSearch}
            disabled={loading}
            className="search-btn"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {/* Display error message if API request fails */}
        {error && <p className="error-text">{error}</p>}

        {/* Display current weather result */}
        {weatherData && weatherData.main && (
          <>
            {/* Current temperature */}
            <h1 className="temp">
              {Math.round(weatherData.main.temp)}°C
            </h1>

            {/* Feels like temperature */}
            <p className="small-text">
              Feels like {Math.round(weatherData.main.feels_like)}°C
            </p>

            {/* Feature highlights */}
            <div className="features">
              <div className="feature-item">🌤 Live Weather</div>
              <div className="feature-item">📅 5-Day Forecast</div>
              <div className="feature-item">⚡ Fast & Simple</div>
            </div>
          </>
        )}

        {/* 5-day forecast section */}
        {forecastData.length > 0 && (
          <div className="forecast-section">
            <h4 className="forecast-title">5 Day Forecast</h4>

            <div className="forecast-row">
              {forecastData.map((day, index) => (
                <div className="forecast-item" key={index}>
                  {/* Day name */}
                  <p>
                    {new Date(day.dt_txt).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </p>

                  {/* Weather icon from OpenWeather */}
                  <img
                    className="forecast-icon"
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt="forecast icon"
                  />

                  {/* Forecast temperature */}
                  <p>{Math.round(day.main.temp)}°</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;