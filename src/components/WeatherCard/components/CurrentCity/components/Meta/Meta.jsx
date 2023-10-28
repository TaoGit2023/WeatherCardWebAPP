import Humidity from "../../../../../../assets/meta_icon/humidity.svg";
import PM from "../../../../../../assets/meta_icon/PM2.5.svg";
import Somatosensory from "../../../../../../assets/meta_icon/Somatosensory_temperature.svg";
import Wind from "../../../../../../assets/meta_icon/wind_speed.svg";
import Item from "./components/Item/Item";
import Container from "../../../../../Container/Container";
const Meta = () => {
  return (
    <Container className="bg-Solitude flex p-6 justify-around text-black text-center mt-12">
      <Item imgSrc={Humidity}>85%</Item>
      <Item imgSrc={Wind}>9km/h</Item>
      <Item imgSrc={PM}>75ug</Item>
      <Item imgSrc={Somatosensory}>26°</Item>
    </Container>
  );
};

export default Meta;
