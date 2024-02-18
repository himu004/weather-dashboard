/* eslint-disable react/prop-types */
import useWeather from "../Hooks/useWeather";
import { WeatherContext } from "../contex";

const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();

  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
