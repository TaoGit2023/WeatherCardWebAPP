import CityWeather from "./components/CityWeather/CityWeather";
import London from "../../../../assets/City/London.png";
import Newyork from "../../../../assets/City/Newyork.png";
import Shanghai from "../../../../assets/City/Shanghai.png";
import Sydney from "../../../../assets/City/Sydney.png";
import { useEffect, useState } from "react";
import axios from "axios";

const OtherCities = () => {
  const [citiesWeather, setCitiesWeather] = useState({});
  const cities = ["Sydney", "Shanghai", "Newyork", "London"];
  const allCitiesWeather = [
    {
      name: "Shanghai",
      temperatureRange: {
        min: 20,
        max: 23,
      },
      bg: Shanghai,
    },
    {
      name: "Sydney",
      temperatureRange: {
        min: 20,
        max: 23,
      },
      bg: Sydney,
    },
    {
      name: "New York",
      temperatureRange: {
        min: 20,
        max: 23,
      },
      bg: Newyork,
    },
    {
      name: "London",
      temperatureRange: {
        min: 20,
        max: 23,
      },
      bg: London,
    },
  ];
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
      {allCitiesWeather.map((cityWeather) => {
        return (
          <CityWeather
            key={cityWeather.name}
            city={cityWeather.name}
            weatherIcon={"Sunny"}
            minTemperature={cityWeather.temperatureRange.min}
            maxTemperature={cityWeather.temperatureRange.min}
            bg={cityWeather.bg}
          />
        );
      })}
    </div>
  );
};

export default OtherCities;
