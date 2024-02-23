import "./App.css";
import Page from "./Page";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
