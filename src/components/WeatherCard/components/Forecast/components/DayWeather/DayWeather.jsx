import TemperatureRange from "../../../../../TemperatureRange/TemperatureRange"
import WeatherIcon from "../../../../../WeatherIcon/WeatherIcon"
const DayWeather = ({weekday,date,weatherIcon,minTemperature,maxTemperature})=>{
    return(
        <div className="text-center">
            <div>
                <div className="font-semibold text-3xl">{weekday}</div>
                <div>{date}</div>
            </div>
            <WeatherIcon weatherName={weatherIcon}/>
            <TemperatureRange min={minTemperature} max={maxTemperature}/>
        </div>
    )
}
export default DayWeather