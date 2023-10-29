import BackgroundImage from "../../../BackgroundImage/BackgroundImage";
import Container from "../../../Container/Container";
import cloud from "../../../../assets/background/Cloudy_day_background.png";
import WeatherIcon from "../../../WeatherIcon/WeatherIcon";
import Meta from "./components/Meta/Meta";
import TemperatureRange from "../../../TemperatureRange/TemperatureRange";
import { useEffect, useState } from "react";
import axios from "axios";
import Dates from "./components/Date/Dates";
const CurrentCity = () => {
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [temperatureRange, setTemperatureRange] = useState({});
  const [meta, setMeta] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/forecast.json?key=88d6da17c65944d4bc640552232910&q=London&aqi=yes&days=4"
      )
      .then((res) => {
        setDate(res.data.current.last_updated);
        setCity(res.data.location.name);
        setTemperature(res.data.current.temp_c);
        setTemperatureRange({
          min: res.data.forecast.forecastday[0].day.mintemp_c,
          max: res.data.forecast.forecastday[0].day.maxtemp_c,
        });
        setMeta({
          humidity: res.data.current.humidity,
          windSpeed: res.data.current.wind_kph,
          pm: res.data.current.air_quality.pm2_5,
          somatosensory: res.data.current.feelslike_c,
        });
      });
  }, []);
  return (
    <Container
      className={
        "overflow-hidden bg-gradient-to-b from-newBlue-Cornflower to-newBlue-Dodger"
      }>
      <BackgroundImage bg={cloud} className={"p-4 text-white w-[330px]"}>
        <Dates date={date}/>
        <div className="text-center mt-8">
          <div className="text-3xl font-semibold">{city}</div>
          <div className="text-8xl font-bold mt-8">{`${temperature}°`}</div>
          <TemperatureRange
            min={temperatureRange.min}
            max={temperatureRange.max}
          />
        </div>
        <WeatherIcon weatherName={"Cloudy"} />
        <Meta meta={meta}/>
      </BackgroundImage>
    </Container>
  );
};
export default CurrentCity;
