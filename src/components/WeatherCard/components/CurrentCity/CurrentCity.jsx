import BackgroundImage from "../../../BackgroundImage/BackgroundImage";
import Container from "../../../Container/Container";
import cloud from "../../../../assets/background/Cloudy_day_background.png";
import WeatherIcon from "../../../WeatherIcon/WeatherIcon";
import Meta from "./components/Meta/Meta";
//import Cloudy from '../../../../assets/weather_icon/Cloudy.png'
const CurrentCity = () => {
  return (
    <Container
      className={
        "overflow-hidden bg-gradient-to-b from-newBlue-Cornflower to-newBlue-Dodger"
      }>
      <BackgroundImage
        bg={cloud}
        className={"p-4 text-white w-[330px]"}>
        <div>23 July, Sunday 12:00</div>
        <div className="text-center mt-8">
          <div className="text-3xl font-semibold">Shanghai</div>
          <div className="text-8xl font-bold mt-8">23°</div>
          <div>20 ~ 23°</div>
        </div>
          <WeatherIcon weatherName={'Cloudy'}/>
          <Meta/>
      </BackgroundImage>
    </Container>
  );
};
export default CurrentCity;
