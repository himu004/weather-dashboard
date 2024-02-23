import { useContext } from "react";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import { WeatherContext } from "./contex";

import ClearSkyImage from './assets/backgrounds/clear-sky.jpg';
import FewCloudsImage from './assets/backgrounds/few-clouds.jpg';
import MistImage from './assets/backgrounds/mist.jpeg';
import RainyDayImage from './assets/backgrounds/rainy-day.jpg';
import ScatterdCloudImage from './assets/backgrounds/scattered-clouds.jpg';
import SnowImage from './assets/backgrounds/snow.jpg';
import SunnyImage from './assets/backgrounds/sunny.jpg';
import ThunderStormImage from './assets/backgrounds/thunderstorm.jpg';
import WinterImage from './assets/backgrounds/winter.jpg';



const Page = () => {

    const {WeatherData, loading} = useContext(WeatherContext)

  return (
    <>
    {
        loading.state ? (<p>{loading.message}</p>) : 
        (<div className="grid place-content-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>)}
    </>
  );
};

export default Page;
