import { useState } from "react";
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'aed01b48520506926c715c82c2a9d3d0';

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city');
      return;
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found');
      } else {
        setError('Something went wrong!');
      }
      setWeatherData(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-white">
        <h1 className="text-4xl font-bold mb-6 text-center drop-shadow-md">🌤️ Weather App</h1>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 rounded-xl text-black outline-none mb-4 focus:ring-2 focus:ring-white/70 transition duration-200"
        />

        <button
          onClick={fetchWeather}
          className="w-full p-3 rounded-xl bg-white text-purple-700 font-semibold hover:bg-purple-100 transition duration-300 shadow-lg"
        >
          Get Weather
        </button>

        {error && (
          <p className="mt-4 text-red-200 bg-red-500/30 px-4 py-2 rounded-lg text-center w-full">
            {error}
          </p>
        )}

        {weatherData && (
          <div className="mt-6 text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-1">{weatherData.name}</h2>
            <p className="text-lg italic mb-2 capitalize">{weatherData.weather[0].description}</p>
            <p className="text-2xl font-semibold mb-2">🌡 {weatherData.main.temp}°C</p>
            <p className="text-lg mb-1">💧 Humidity: {weatherData.main.humidity}%</p>
            <p className="text-lg">💨 Wind: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
