import Humidity from "../../../../../../assets/meta_icon/humidity.svg";
import PM from "../../../../../../assets/meta_icon/PM2.5.svg";
import Somatosensory from "../../../../../../assets/meta_icon/Somatosensory_temperature.svg";
import Wind from "../../../../../../assets/meta_icon/wind_speed.svg";
import Item from "./components/Item/Item";
import Container from "../../../../../Container/Container";
const Meta = ({meta} ) => {
  const {humidity, windSpeed, pm, somatosensory} = meta;
  return (
    <Container className="bg-Solitude flex p-6 justify-around text-black text-center mt-12">
      <Item imgSrc={Humidity}>{humidity}%</Item>
      <Item imgSrc={Wind}>{windSpeed}km/h</Item>
      <Item imgSrc={PM}>{pm}ug</Item>
      <Item imgSrc={Somatosensory}>{somatosensory}°</Item>
    </Container>
  );
};

export default Meta;
