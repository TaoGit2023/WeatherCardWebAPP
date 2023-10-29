import BackgroundImage from "../../../../../BackgroundImage/BackgroundImage";
import TemperatureRange from "../../../../../TemperatureRange/TemperatureRange";
import WeatherIcon from "../../../../../WeatherIcon/WeatherIcon";
import Container from "../../../../../Container";

const CityWeather = ({
  weatherIcon,
  city,
  minTemperature,
  maxTemperature,
  bg,
}) => {
  return (
    <BackgroundImage bg={bg} className={'rounded-3xl mr-8'}>
      <Container
        className={
          "bg-gradient-to-r from-newBlue-Cornflower to-newBlue-Dodger w-[200px] opacity-75 text-center text-white"
        }>
        <WeatherIcon weatherName={weatherIcon} className={'w-14'} />
        <div className="text-3xl font-semibold mt-8">{city}</div>
        <TemperatureRange min={minTemperature} max={maxTemperature} />
      </Container>
    </BackgroundImage>
  );
};
export default CityWeather;
