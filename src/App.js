import './App.css';
import Main from './pages/main';
import { WeatherProvider } from './context/weatherDataContext';

function App() {
  return (
    <div className="App">
        <WeatherProvider>
        <Main/>
        </WeatherProvider>
    </div>
  );
}

export default App;
