import DayWeather from "./components/DayWeather/DayWeather";
import { useEffect, useState } from "react";
import axios from "axios";

const Forecast = () => {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.weatherapi.com/v1/forecast.json?", {
        params: {
          key: "88d6da17c65944d4bc640552232910",
          q: "London",
          aqi: "yes",
          days: 5,
        },
      })
      .then((res) => {
        setForecast(res.data.forecast.forecastday);
      });
  }, []);
  return (
    <div className="flex justify-around">
      {
        forecast.slice(1,5).map((data)=>{
          return (
            <DayWeather key={data.date} date={data.date} weatherIcon={'Cloudy'} minTemperature={data.day.mintemp_c} maxTemperature={data.day.maxtemp_c}/>
          )
        })
      }
    </div>
  );
};
export default Forecast;
