import Cloudy from '../../assets/weather_icon/Cloudy.png'
import Cloudy_day from "../../assets/weather_icon/Cloudy_day.png";
import Hail from "../../assets/weather_icon/Hail.png";
import Rain from "../../assets/weather_icon/Rain.png";
import Snow from "../../assets/weather_icon/Snow.png";
import Sunny from "../../assets/weather_icon/Sunny.png";

const WeatherIcon = ({weatherName,className})=>{
    const allWeathers = {Cloudy,Cloudy_day,Hail,Rain,Snow,Sunny};
    return (
            <img src={allWeathers[weatherName]} alt={weatherName} className={`mx-auto ${className}`}/>
    )
}

export default WeatherIcon