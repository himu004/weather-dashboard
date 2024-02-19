import "./App.css";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import { WeatherProvider } from "./provider";

function App() {
  return (
    <WeatherProvider>
    <div className="grid place-content-center h-screen">
      <Header />

      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
    </WeatherProvider>
  );
}

export default App;
