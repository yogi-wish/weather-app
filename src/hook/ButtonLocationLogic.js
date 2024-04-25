import { useContext, useEffect } from 'react';
import { useWeatherData } from './useWeatherData';
import { WeatherDataContext } from '../context/weatherDataContext';

const API_KEY = "8f679f7dbc2fa83a40d252f446d841c4"

const useButtonLocationLogic = () => {
  const { state, dispatch } = useContext(WeatherDataContext);
  const { fetchWeatherData } = useWeatherData(`https://api.openweathermap.org/data/2.5/weather?lat=${state.latitude}&lon=${state.longitude}&units=metric&appid=${API_KEY}`);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch({ type: 'SET_LAT', payload: latitude });
          dispatch({ type: 'SET_LON', payload: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log("Geolocation not available");
    }
  }, []);

  const handleFetchWeather = () => {
    fetchWeatherData();
  };

  return { handleFetchWeather };
};

export default useButtonLocationLogic;
