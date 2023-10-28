import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import WeatherCard from "./components/WeatherCard";
import bg from "./assets/bg.png";

const App = () => {
  return (
    <BackgroundImage bg={bg} className={'h-screen flex justify-center items-center'}>
      <WeatherCard/>
    </BackgroundImage>
  );
};

export default App;
