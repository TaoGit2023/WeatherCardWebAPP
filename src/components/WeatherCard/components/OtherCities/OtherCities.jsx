import CityWeather from "./components/CityWeather/CityWeather";
import London from "../../../../assets/City/London.png";
import Newyork from "../../../../assets/City/Newyork.png";
import Shanghai from "../../../../assets/City/Shanghai.png";
import Sydney from "../../../../assets/City/Sydney.png";
import { useEffect, useState } from "react";
import axios from "axios";

const OtherCities = () => {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const cities = ["Sydney", "Shanghai", "Newyork", "London"];
  const cityInfo = [];
  useEffect(() => {
    // const fetchCity = async () => {
    //   for (let i = 0; i < cities.length; i++) {
    //     const response = await axios
    //       .get("https://api.weatherapi.com/v1/forecast.json?", {
    //         params: {
    //           key: "88d6da17c65944d4bc640552232910",
    //           q: cities[i],
    //         },
    //       })
    //       .then((res) => {
    //         cityInfo.push({
    //           name: res.data.location.name,
    //           temperatureRange: {
    //             min: res.data.forecast.forecastday[0].mintemp_c,
    //             max: res.data.forecast.forecastday[0].maxtemp_c,
    //           },
    //         })
    //       });
    //   }
    // };
    // fetchCity();
    // setCitiesWeather(cityInfo);
  }, []);
  return (
    <div className="flex justify-around mt-8">
      {cities.map((cityWeatherInfo) => {
        return (
          <CityWeather
            key={cityWeatherInfo}
            city={cityWeatherInfo}
            weatherIcon={"Sunny"}
            minTemperature={11}
            maxTemperature={20}
            bg={cityWeatherInfo}
          />
        );
      })}
    </div>
  );
};

export default OtherCities;
