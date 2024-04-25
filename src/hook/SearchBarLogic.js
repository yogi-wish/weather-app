import { useContext } from 'react'
import { useWeatherData } from './useWeatherData';
import { WeatherDataContext } from '../context/weatherDataContext';

const API_KEY = "8f679f7dbc2fa83a40d252f446d841c4"

const useSearchBarLogic = () => {
    const { state, dispatch } = useContext(WeatherDataContext);
    const { fetchWeatherData } = useWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${state.city}&units=metric&appid=${API_KEY}`);
      const handleChange = (value) => {
        if(value.length>=0){
          console.log(value);
          dispatch({ type: 'SET_CITY', payload: value });
        }
        };
        const fetchDetails = (event) => {
          //const env = dotenv.config().parsed;
          event.preventDefault();
          // console.log(state.city);
          fetchWeatherData();
        };
    return{handleChange,fetchDetails};
}

export default useSearchBarLogic;