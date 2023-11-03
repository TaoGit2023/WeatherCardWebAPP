import { dateStyle } from "../../../../../utils/dateStyle";

const Dates = ({ date }) => {
  return (
    <div>
      {
        dateStyle(date)
      }
    </div>
  );
};

export default Dates;
