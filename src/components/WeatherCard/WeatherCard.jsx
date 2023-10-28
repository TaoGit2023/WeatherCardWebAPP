import Container from "../Container/Container"
import CurrentCity from "./components/CurrentCity/CurrentCity"
import Forecast from "./components/Forecast/Forecast"
import OtherCities from "./components/OtherCities/OtherCities"
import SearchBar from "./components/SearchBar/SearchBar"

const WeatherCard = ()=>{
    return (
      <Container className={"flex bg-LinkWater p-4"}>
        <div>
          <CurrentCity />
        </div>
        <div className="m-10">
          <Forecast />
          <SearchBar />
          <OtherCities />
        </div>
      </Container>
    );
}
export default WeatherCard