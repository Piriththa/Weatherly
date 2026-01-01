import { createContext, useState, useRef } from "react";
import axios from "axios";

export const WeatherContext = createContext();

const API_KEY = "b3f3c402bdefc6c67ec52913c4de5112";

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔹 Debounce timer 
  const debounceRef = useRef(null);

  const fetchWeather = (city) => {
    const query = city?.trim();

    // Prevent invalid / unnecessary API calls
    if (!query || query.length < 3) return;

    // 🔥 Debounce logic
    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);

        const weatherRes = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              q: query,
              appid: API_KEY,
              units: "metric",
            },
          }
        );

        const forecastRes = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast",
          {
            params: {
              q: query,
              appid: API_KEY,
              units: "metric",
            },
          }
        );

        setWeatherData(weatherRes.data);

        // 5-day forecast (1 item per day)
        const dailyForecast = forecastRes.data.list.filter(
          (_, index) => index % 8 === 0
        );
        setForecastData(dailyForecast);

      } catch (err) {
        setWeatherData(null);
        setForecastData([]);
        setError("City not found. Please check the name.");
      } finally {
        setLoading(false);
      }
    }, 600); // ⏱ 600ms debounce
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        forecastData,
        fetchWeather,
        loading,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
