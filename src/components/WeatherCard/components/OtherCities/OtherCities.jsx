import CityWeather from "./components/CityWeather/CityWeather";
import London from "../../../../assets/City/London.png"
import Newyork from "../../../../assets/City/Newyork.png"
import Shanghai from '../../../../assets/City/Shanghai.png'
import Sydney from '../../../../assets/City/Sydney.png'
 
const OtherCities = () => {
  return (
    <div className="flex justify-around mt-8">
      <CityWeather
        weatherIcon={"Sunny"}
        city={"Sydney"}
        minTemperature={28}
        maxTemperature={32}
        bg={Sydney}
      />
      <CityWeather
        weatherIcon={"Cloudy"}
        city={"Shanghai"}
        minTemperature={28}
        maxTemperature={32}
        bg={Shanghai}
      />
      <CityWeather
        weatherIcon={"Cloudy_day"}
        city={"New York"}
        minTemperature={28}
        maxTemperature={32}
        bg={Newyork}
      />
      <CityWeather
        weatherIcon={"Snow"}
        city={"London"}
        minTemperature={28}
        maxTemperature={32}
        bg={London}
      />
    </div>
  );
};

export default OtherCities;
