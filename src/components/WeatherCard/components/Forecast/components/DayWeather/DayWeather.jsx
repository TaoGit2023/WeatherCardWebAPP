import TemperatureRange from "../../../../../TemperatureRange/TemperatureRange"
import WeatherIcon from "../../../../../WeatherIcon/WeatherIcon"
import { dateStyle } from "../../../../../utils/dateStyle"
const DayWeather = ({date,weatherIcon,minTemperature,maxTemperature})=>{
    const dates = dateStyle(date).split(' ');
    const weekdayDate = dates.slice(0,3).join().split(',')
    const weekdayDisplay = weekdayDate[0];
    const dateDisplay = weekdayDate[2]+' '+ weekdayDate[3]

    return (
      <div className="text-center">
        <div>
          <div className="font-semibold text-3xl">{weekdayDisplay}</div>
          <div>{dateDisplay}</div>
        </div>
        <WeatherIcon weatherName={weatherIcon} />
        <TemperatureRange min={minTemperature} max={maxTemperature} />
      </div>
    );
}
export default DayWeather