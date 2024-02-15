import "./App.css";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

function App() {
  return (
    <div className="grid place-content-center h-screen">
      <Header />

      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
