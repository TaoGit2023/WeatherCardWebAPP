import DayWeather from "./components/DayWeather/DayWeather"
const Forecast = ()=>{
    return (
      <div className="flex justify-around">
        <DayWeather
          weekday={"Monday"}
          date={"24 July"}
          weatherIcon={'Rain'}
          minTemperature={20}
          maxTemperature={25}
        />
        <DayWeather
          weekday={"Tuesday"}
          date={"25 July"}
          weatherIcon={'Cloudy_day'}
          minTemperature={20}
          maxTemperature={25}
        />
        <DayWeather
          weekday={"Wednesday"}
          date={"26 July"}
          weatherIcon={'Cloudy'}
          minTemperature={20}
          maxTemperature={25}
        />
        <DayWeather
          weekday={"Thursday"}
          date={"27 July"}
          weatherIcon={'Sunny'}
          minTemperature={20}
          maxTemperature={25}
        />
      </div>
    );
}
export default Forecast